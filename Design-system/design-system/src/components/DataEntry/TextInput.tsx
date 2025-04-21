import React from 'react';
import './TextInput.css';

export interface TextInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  label?: string;
  type?: 'text' | 'password' | 'email' | 'number';
  className?: string;
  size?: 'small' | 'medium' | 'large';
  icon?: React.ReactNode;
  required?: boolean;
  fullWidth?: boolean;
  readOnly?: boolean;
  helpText?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder = '',
  disabled = false,
  error = '',
  label = '',
  type = 'text',
  className = '',
  size = 'medium',
  icon,
  required = false,
  fullWidth = true,
  readOnly = false,
  helpText = '',
}) => {
  const inputId = label ? `input-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={`text-input-wrapper ${fullWidth ? 'full-width' : ''} ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className={`text-input-label ${disabled ? 'disabled' : ''} ${required ? 'required' : ''}`}
        >
          {label}
        </label>
      )}
      
      <div className={`text-input-container ${error ? 'error' : ''} ${disabled ? 'disabled' : ''}`}>
        {icon && <div className="text-input-icon">{icon}</div>}
        <input
          id={inputId}
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          disabled={disabled}
          className={`text-input ${size} ${disabled ? 'disabled' : ''} ${icon ? 'has-icon' : ''}`}
          required={required}
          readOnly={readOnly}
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={error ? `${inputId}-error` : helpText ? `${inputId}-help` : undefined}
        />
      </div>
      
      {error ? (
        <span id={`${inputId}-error`} className="text-input-error" role="alert">
          {error}
        </span>
      ) : helpText ? (
        <span id={`${inputId}-help`} className="text-input-help">
          {helpText}
        </span>
      ) : null}
    </div>
  );
};