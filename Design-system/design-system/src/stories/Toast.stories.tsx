import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Toast } from '../components/Feedback/Toast';

const meta: Meta<typeof Toast> = {
  title: 'Feedback/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Visual style variant',
      table: {
        defaultValue: { summary: 'info' }
      }
    },
    message: {
      control: 'text',
      description: 'Toast message content',
      table: {
        type: { summary: 'string' }
      }
    },
    duration: {
      control: 'number',
      description: 'Auto-dismiss duration in ms (0 for persistent)',
      table: {
        defaultValue: { summary: '5000' }
      }
    },
    position: {
      control: { type: 'select' },
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      description: 'Position on screen',
      table: {
        defaultValue: { summary: 'top-right' }
      }
    },
    showClose: {
      control: 'boolean',
      description: 'Show close button',
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    icon: {
      control: { disable: true },
      description: 'Custom icon element'
    }
  },
  args: {
    message: 'This is a toast message',
    variant: 'info'
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

/**
 * # Toast Component
 * 
 * A notification message that appears temporarily to provide feedback.
 * 
 * ## Features
 * - Multiple variants (info, success, warning, error)
 * - Configurable duration and position
 * - Custom icons and actions
 * - Accessible with ARIA attributes
 * - Responsive design
 * - Dark mode support
 */
export const Info: Story = {
  args: {
    message: 'This is an informational message',
    variant: 'info'
  }
};

export const Success: Story = {
  args: {
    message: 'Operation completed successfully!',
    variant: 'success'
  }
};

export const Warning: Story = {
  args: {
    message: 'Warning: This action cannot be undone',
    variant: 'warning'
  }
};

export const Error: Story = {
  args: {
    message: 'Error: Failed to save changes',
    variant: 'error'
  }
};

export const Persistent: Story = {
  args: {
    message: 'This toast will stay until dismissed',
    duration: 0
  },
  parameters: {
    docs: {
      description: {
        story: 'Toast with duration set to 0 will remain until manually dismissed.'
      }
    }
  }
};

export const CustomIcon: Story = {
  args: {
    message: 'Custom icon toast',
    icon: (
      <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
      </svg>
    )
  }
};

export const WithActions: Story = {
  args: {
    message: 'Item deleted. Undo?',
    duration: 7000,
    showClose: false
  },
  render: (args) => (
    <Toast {...args}>
      <button 
        style={{
          background: 'none',
          border: '1px solid currentColor',
          color: 'inherit',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
          marginLeft: '0.5rem',
          cursor: 'pointer'
        }}
        onClick={() => console.log('Undo action')}
      >
        Undo
      </button>
    </Toast>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast with additional action buttons.'
      }
    }
  }
};

export const PositionExamples: Story = {
  render: () => (
    <div style={{ height: '400px', position: 'relative' }}>
      <Toast 
        message="Top right (default)" 
        position="top-right" 
        duration={0}
      />
      <Toast 
        message="Top left" 
        position="top-left" 
        duration={0}
      />
      <Toast 
        message="Bottom right" 
        position="bottom-right" 
        duration={0}
      />
      <Toast 
        message="Bottom left" 
        position="bottom-left" 
        duration={0}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates all available toast positions.'
      }
    }
  }
};

export const DarkMode: Story = {
  args: {
    message: 'Dark mode toast',
    variant: 'info'
  },
  render: (args) => (
    <div data-theme="dark" style={{ 
      backgroundColor: '#1F2937', 
      padding: '2rem',
      borderRadius: '0.5rem'
    }}>
      <Toast {...args} duration={0} />
      <div style={{ marginTop: '1rem' }}>
        <Toast 
          message="Dark mode error" 
          variant="error" 
          duration={0} 
        />
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Toast appearance in dark mode with proper contrast.'
      }
    }
  }
};

/**
 * ## Anatomy
 * 
 * - **Icon**: Visual indicator (default or custom)
 * - **Message**: Primary text content
 * - **Close Button**: Optional dismiss control
 * - **Progress Bar**: Visual timer for auto-dismiss
 * - **Actions**: Optional buttons (e.g., "Undo")
 */
export const Anatomy = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Toast 
      message="Toast anatomy example" 
      variant="info" 
      duration={0}
    >
      <button 
        style={{
          background: 'none',
          border: '1px solid currentColor',
          color: 'inherit',
          padding: '0.25rem 0.5rem',
          borderRadius: '0.25rem',
          marginLeft: '0.5rem',
          cursor: 'pointer'
        }}
      >
        Action
      </button>
    </Toast>
  </div>
);

/**
 * ## Best Practices
 * 
 * ### Dos and Don'ts
 */
export const BestPractices = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <div>
      <h3 style={{ margin: 0 }}>✅ Do</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Use for short, important notifications</li>
        <li>Keep messages concise (1-2 lines)</li>
        <li>Use appropriate variant for message type</li>
        <li>Include close button for persistent toasts</li>
        <li>Test in both light and dark modes</li>
      </ul>
    </div>
    
    <div>
      <h3 style={{ margin: 0 }}>❌ Don't</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Don't overload with multiple toasts</li>
        <li>Avoid long paragraphs of text</li>
        <li>Don't use for critical errors that block flow</li>
        <li>Avoid low contrast color combinations</li>
      </ul>
    </div>
  </div>
);

/**
 * ## Accessibility
 * 
 * - ARIA attributes for screen readers
 * - Keyboard navigable close button
 * - Sufficient color contrast
 * - Responsive design
 * - Forced colors mode support
 */
export const Accessibility = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <Toast 
      message="Accessible toast example" 
      variant="info" 
      duration={0}
    />
    <div style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
      Includes:
      <ul style={{ paddingLeft: '1.25rem' }}>
        <li>role="alert" for screen readers</li>
        <li>Keyboard-focusable close button</li>
        <li>Proper contrast ratios</li>
        <li>Windows High Contrast support</li>
      </ul>
    </div>
  </div>
);