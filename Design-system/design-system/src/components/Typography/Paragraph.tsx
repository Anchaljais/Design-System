import React from 'react';
import './Paragraph.css';

interface ParagraphProps {
  children: React.ReactNode;
  variant?: 'default' | 'lead';
  className?: string;
  id?: string;
}

export const Paragraph: React.FC<ParagraphProps> = ({ 
  children, 
  variant = 'default',
  className = '',
  id
}) => {
  const variantClass = `paragraph--${variant}`;
  
  return (
    <p 
      id={id}
      className={`paragraph ${variantClass} ${className}`}
    >
      {children}
    </p>
  );
};