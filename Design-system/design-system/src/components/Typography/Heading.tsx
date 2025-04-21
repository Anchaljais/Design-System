// src/components/Typography/Heading.tsx
import React from 'react';
import './Heading.css';

type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type ColorVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'warning' | 'light' | 'dark';

interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level: HeadingLevel;
  color?: ColorVariant;
  responsive?: boolean;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({
  level,
  color = 'primary',
  responsive = true,
  className = '',
  children,
  ...props
}) => {
  const Tag = `h${level}` as const;
  const classes = [
    'heading',
    `heading--size-${level}`,
    `heading--color-${color}`,
    responsive ? 'heading--responsive' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <Tag className={classes} {...props}>
      {children}
    </Tag>
  );
};