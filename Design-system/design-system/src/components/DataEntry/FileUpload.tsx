import React, { useCallback, useRef, useState } from 'react';
import './FileUpload.css';

interface FileUploadProps {
  onFileSelect: (file: File | File[] | null) => void;
  accept?: string;
  disabled?: boolean;
  label?: string;
  multiple?: boolean;
  required?: boolean;
  maxSize?: number; // in bytes
  className?: string;
  errorMessage?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  onFileSelect,
  accept = '*',
  disabled = false,
  label = 'Choose File',
  multiple = false,
  required = false,
  maxSize,
  className,
  errorMessage,
}) => {
  const [files, setFiles] = useState<File[]>([]);
  const [error, setError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const selectedFiles = e.target.files ? Array.from(e.target.files) : [];
      setError(null);

      // Validate file size if maxSize is provided
      if (maxSize) {
        const oversizedFiles = selectedFiles.filter(file => file.size > maxSize);
        if (oversizedFiles.length > 0) {
          setError(`File(s) exceed maximum size of ${formatFileSize(maxSize)}`);
          return;
        }
      }

      setFiles(selectedFiles);
      onFileSelect(multiple ? selectedFiles : selectedFiles[0] || null);
    },
    [onFileSelect, multiple, maxSize]
  );

  const handleButtonClick = () => {
    if (inputRef.current && !disabled) {
      inputRef.current.value = '';
      inputRef.current.click();
    }
  };

  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 Bytes';
    
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    // Calculate the size and format with 2 decimal places
    const sizeValue = bytes / Math.pow(k, i);
    const formattedSize = parseFloat(sizeValue.toFixed(2));
    
    return `${formattedSize} ${sizes[i]}`;
  };
  return (
    <div className={`file-upload-container ${className || ''}`}>
      {label && (
        <label className={`file-upload-label ${disabled ? 'disabled' : ''}`}>
          {label}
          {required && <span className="required-indicator" aria-hidden="true"> *</span>}
        </label>
      )}
      
      <input
        ref={inputRef}
        className="file-upload-input"
        type="file"
        onChange={handleFileChange}
        accept={accept}
        disabled={disabled}
        multiple={multiple}
        required={required}
        aria-required={required}
        aria-invalid={!!error}
      />
      
      <button
        type="button"
        className={`file-upload-button ${error ? 'has-error' : ''}`}
        disabled={disabled}
        onClick={handleButtonClick}
        aria-describedby={error ? 'file-upload-error' : undefined}
      >
        <span className="file-upload-icon" role="img" aria-label="file icon">📁</span>
        {label}
      </button>
      
      {files.length > 0 && (
        <div className="file-info-container">
          {files.map((file, index) => (
            <div key={index}>
              <span className="file-name">{file.name}</span>
              <span className="file-size">{formatFileSize(file.size)}</span>
            </div>
          ))}
        </div>
      )}
      
      {(error || errorMessage) && (
        <span className="error-message" id="file-upload-error">
          {error || errorMessage}
        </span>
      )}
    </div>
  );
};