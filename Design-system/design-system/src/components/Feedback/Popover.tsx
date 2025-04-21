import React, { useRef, useState, useEffect, KeyboardEvent } from 'react';
import './Popover.css';

type PopoverPosition = 'top' | 'right' | 'bottom' | 'left';

interface PopoverProps {
  children: React.ReactNode;
  content: React.ReactNode;
  position?: PopoverPosition;
  className?: string;
  trigger?: 'click' | 'hover';
  closeOnContentClick?: boolean;
  ariaLabel?: string;
}

export const Popover: React.FC<PopoverProps> = ({
  children,
  content,
  position = 'bottom',
  className = '',
  trigger = 'click',
  closeOnContentClick = false,
  ariaLabel = 'Toggle popover',
}) => {
  const [visible, setVisible] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const togglePopover = () => setVisible((prev) => !prev);
  const openPopover = () => setVisible(true);
  const closePopover = () => setVisible(false);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        triggerRef.current &&
        !triggerRef.current.contains(event.target as Node) &&
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        closePopover();
      }
    };

    if (trigger === 'click') {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [trigger]);

  // Handle hover events
  useEffect(() => {
    const triggerElement = triggerRef.current;
    if (!triggerElement || trigger !== 'hover') return;

    const handleMouseEnter = () => openPopover();
    const handleMouseLeave = () => closePopover();

    triggerElement.addEventListener('mouseenter', handleMouseEnter);
    triggerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      triggerElement.removeEventListener('mouseenter', handleMouseEnter);
      triggerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [trigger]);

  // Handle keyboard navigation
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closePopover();
    }
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      togglePopover();
    }
  };

  // Focus trap for accessibility
  useEffect(() => {
    if (visible && popoverRef.current) {
      const focusableElements = popoverRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );

      if (focusableElements.length > 0) {
        (focusableElements[0] as HTMLElement).focus();
      }
    }
  }, [visible]);

  const handleContentClick = () => {
    if (closeOnContentClick) {
      closePopover();
    }
  };

  return (
    <div
      className={`popover-container ${className}`}
      ref={triggerRef}
    >
      <div
        onClick={trigger === 'click' ? togglePopover : undefined}
        onKeyDown={handleKeyDown}
        className="popover-trigger"
        role="button"
        tabIndex={0}
        aria-expanded={visible}
        aria-haspopup="dialog"
        aria-label={ariaLabel}
      >
        {children}
      </div>
      <div
        ref={popoverRef}
        className={`popover-content ${position} ${visible ? 'visible' : ''}`}
        role="dialog"
        aria-modal="true"
        onClick={handleContentClick}
      >
        {content}
      </div>
    </div>
  );
};