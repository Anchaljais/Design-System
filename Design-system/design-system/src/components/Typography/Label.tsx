import React from 'react';
import './Label.css';

interface LabelProps {
  children: React.ReactNode;
  htmlFor?: string;
  className?: string;
  required?: boolean;
  disabled?: boolean;
}

export const Label = ({ 
  children, 
  htmlFor, 
  className = '', 
  required = false,
  disabled = false
}: LabelProps) => {
  const labelClasses = [
    'label',
    disabled ? 'label--disabled' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <label
      htmlFor={htmlFor}
      className={labelClasses}
    >
      {children}
      {required && <span className="label__required">*</span>}
    </label>
  );
};