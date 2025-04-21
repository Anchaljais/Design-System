import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import AlertBanner from '../components/Feedback/AlertBanner';

const meta: Meta<typeof AlertBanner> = {
  title: 'Feedback/AlertBanner',
  component: AlertBanner,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['info', 'success', 'warning', 'error'],
      description: 'Determines the visual style and color scheme of the alert',
      table: {
        type: { summary: 'AlertType' },
        defaultValue: { summary: 'info' },
      },
    },
    message: {
      control: 'text',
      description: 'The main content text displayed in the alert',
    },
    onClose: {
      action: 'closed',
      description: 'Callback function triggered when dismiss button is clicked',
      table: {
        type: { summary: '() => void' },
      },
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the alert can be dismissed',
      defaultValue: true,
    },
    autoDismiss: {
      control: 'number',
      description: 'Time in milliseconds after which the alert auto-dismisses',
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size variant of the alert',
      defaultValue: 'md',
    },
    icon: {
      control: { type: 'text' },
      description: 'Custom icon to display',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Alert Banner Component

A prominent notification component that displays important messages to users.

### Features
- Four semantic types (info, success, warning, error)
- Dismissible and non-dismissible variants
- Auto-dismiss after timeout
- Custom icons support
- Responsive design
- Full keyboard navigation
- WCAG compliant color contrast
- ARIA attributes for screen readers

### When to Use
- ✅ Display system status messages
- ✅ Notify users of successful operations
- ✅ Warn about potential issues
- ✅ Show error conditions requiring attention

### Accessibility
- Sets \`role="alert"\` for screen readers
- Uses \`aria-live\` appropriately
- Close button has proper ARIA label
- Supports keyboard navigation (Escape to dismiss)
- Focus styles for keyboard users
- Color contrast meets WCAG AA standards
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof AlertBanner>;

export const Info: Story = {
  args: {
    type: 'info',
    message: 'System maintenance scheduled for tonight at 10 PM',
  },
};

export const Success: Story = {
  args: {
    type: 'success',
    message: 'Your changes have been saved successfully!',
  },
};

export const Warning: Story = {
  args: {
    type: 'warning',
    message: 'Unsaved changes will be lost if you navigate away',
  },
};

export const Error: Story = {
  args: {
    type: 'error',
    message: 'Failed to save changes. Please try again.',
  },
};

export const NonDismissible: Story = {
  args: {
    type: 'error',
    message: 'Critical system error - please contact support',
    dismissible: false,
  },
};

export const AutoDismiss: Story = {
  args: {
    type: 'success',
    message: 'Operation completed successfully. This will auto-dismiss in 5 seconds.',
    autoDismiss: 5000,
  },
};

export const WithCustomIcon: Story = {
  args: {
    type: 'info',
    message: 'Custom icon alert',
    icon: '🔔',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <AlertBanner type="info" message="Small alert" size="sm" />
      <AlertBanner type="success" message="Medium alert (default)" size="md" />
      <AlertBanner type="warning" message="Large alert" size="lg" />
    </div>
  ),
};

export const AccessibilityChecklist = () => (
  <div>
    <h3>Accessibility Verification</h3>
    <ul>
      <li>✅ Uses proper ARIA roles and attributes</li>
      <li>✅ Supports keyboard navigation</li>
      <li>✅ Provides sufficient color contrast</li>
      <li>✅ Includes focus indicators</li>
      <li>✅ Has meaningful text alternatives</li>
      <li>✅ Properly announces to screen readers</li>
    </ul>
  </div>
);

export const BestPractices = () => (
  <div className="grid gap-4">
    <div>
      <h3 className="font-bold mb-2">Do's</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use for important messages that require user attention</li>
        <li>Keep messages concise and actionable</li>
        <li>Provide dismiss option for non-critical alerts</li>
        <li>Use appropriate alert types consistently</li>
        <li>Include icons for better visual scanning</li>
        <li>Make critical alerts non-dismissible</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">Don'ts</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Don't overuse - too many alerts create noise</li>
        <li>Don't use for success messages that don't need attention</li>
        <li>Don't make critical alerts dismissible</li>
        <li>Don't include long paragraphs of text</li>
        <li>Don't rely solely on color to convey meaning</li>
      </ul>
    </div>
  </div>
);