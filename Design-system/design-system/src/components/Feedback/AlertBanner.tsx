import React, { useEffect, useRef } from 'react';
import './AlertBanner.css';

type AlertType = 'info' | 'success' | 'warning' | 'error';
type AlertSize = 'sm' | 'md' | 'lg';

interface AlertBannerProps {
  type?: AlertType;
  message: string;
  onClose?: () => void;
  dismissible?: boolean;
  autoDismiss?: number; // in milliseconds
  icon?: React.ReactNode;
  size?: AlertSize;
  className?: string;
}

const defaultIcons: Record<AlertType, React.ReactNode> = {
  info: <span aria-hidden="true">ℹ️</span>,
  success: <span aria-hidden="true">✅</span>,
  warning: <span aria-hidden="true">⚠️</span>,
  error: <span aria-hidden="true">❌</span>,
};

const AlertBanner: React.FC<AlertBannerProps> = ({
  type = 'info',
  message,
  onClose,
  dismissible = true,
  autoDismiss,
  icon,
  size = 'md',
  className = '',
}) => {
  const alertRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (autoDismiss && onClose) {
      timerRef.current = setTimeout(() => {
        onClose();
      }, autoDismiss);
    }

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [autoDismiss, onClose]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape' && dismissible && onClose) {
      onClose();
    }
  };

  const displayedIcon = icon || defaultIcons[type];

  return (
    <div
      ref={alertRef}
      className={`alert-banner alert-banner--${size} ${type} ${className}`}
      role="alert"
      aria-live={type === 'error' ? 'assertive' : 'polite'}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div className="alert-banner__content">
        {displayedIcon && (
          <span className="alert-banner__icon" aria-hidden="true">
            {displayedIcon}
          </span>
        )}
        <span className="alert-banner__message">{message}</span>
      </div>
      {dismissible && onClose && (
        <button
          className="alert-banner__close-button"
          onClick={handleClose}
          aria-label="Close alert"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default AlertBanner;