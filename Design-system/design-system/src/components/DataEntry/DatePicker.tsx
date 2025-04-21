import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DatePicker.css';

interface DatePickerProps {
  selected: Date | null;
  onChange: (date: Date | null) => void;
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  minDate?: Date;
  maxDate?: Date;
  error?: string;
  required?: boolean;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  fullWidth?: boolean;
  className?: string;
}

export const CustomDatePicker: React.FC<DatePickerProps> = ({
  selected,
  onChange,
  placeholder = 'Select date',
  disabled = false,
  label = '',
  minDate,
  maxDate,
  error = '',
  required = false,
  size = 'md',
  showIcon = true,
  fullWidth = true,
  className = '',
}) => {
  const inputId = label ? `datepicker-${label.replace(/\s+/g, '-').toLowerCase()}` : undefined;

  return (
    <div className={`date-picker-container ${fullWidth ? '' : 'fit-width'} ${className}`}>
      {label && (
        <label 
          htmlFor={inputId}
          className={`date-picker-label ${disabled ? 'disabled' : ''} ${required ? 'required' : ''}`}
        >
          {label}
        </label>
      )}
      
      <div className={`date-picker-wrapper ${error ? 'error' : ''} ${disabled ? 'disabled' : ''} ${size}`}>
        <DatePicker
          id={inputId}
          selected={selected}
          onChange={onChange}
          placeholderText={placeholder}
          disabled={disabled}
          minDate={minDate}
          maxDate={maxDate}
          className="date-picker-input"
          aria-invalid={!!error}
          aria-required={required}
          aria-describedby={error ? `${inputId}-error` : undefined}
        />
        {showIcon && (
          <div className="date-picker-icon">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V10h14v10zM9 14H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2zm-8 4H7v-2h2v2zm4 0h-2v-2h2v2zm4 0h-2v-2h2v2z"/>
            </svg>
          </div>
        )}
      </div>
      
      {error && (
        <span id={`${inputId}-error`} className="date-picker-error" role="alert">
          {error}
        </span>
      )}
    </div>
  );
};