import React from 'react';
import './HelperText.css';

interface HelperTextProps {
  children: React.ReactNode;
  className?: string;
  error?: boolean;
  disabled?: boolean;
  id?: string;
  icon?: React.ReactNode;
}

export const HelperText = ({ 
  children, 
  className = '', 
  error = false, 
  disabled = false,
  id,
  icon
}: HelperTextProps) => {
  const variantClass = error 
    ? 'helper-text--error' 
    : disabled 
      ? 'helper-text--disabled' 
      : '';
      
  const iconClass = icon ? 'helper-text--with-icon' : '';

  return (
    <span
      id={id}
      className={`helper-text ${variantClass} ${iconClass} ${className}`}
      role={error ? 'alert' : undefined}
      aria-live={error ? 'assertive' : undefined}
      aria-atomic={error ? 'true' : undefined}
    >
      {icon && <span className="helper-text__icon">{icon}</span>}
      {children}
    </span>
  );
};