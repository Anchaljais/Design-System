import React from 'react';
import './Caption.css';

export interface CaptionProps {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  variant?: 'default' | 'strong';
  color?: 'default' | 'primary' | 'error' | 'success';
  id?: string;
}

export const Caption = ({ 
  children, 
  disabled = false, 
  className = '',
  variant = 'default',
  color = 'default',
  id
}: CaptionProps) => {
  const classes = [
    'caption',
    disabled ? 'caption--disabled' : '',
    variant === 'strong' ? 'caption--strong' : '',
    `caption--${color}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <span 
      className={classes}
      id={id}
      aria-disabled={disabled}
    >
      {children}
    </span>
  );
};