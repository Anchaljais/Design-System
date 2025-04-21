import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from '../components/Typography/HelperText';

const meta = {
  title: 'Typography/HelperText',
  component: HelperText,
  tags: ['autodocs'],
  argTypes: {
    error: { 
      control: 'boolean',
      description: 'Error state styling',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    id: {
      control: 'text',
      description: 'HTML id attribute for form association'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    children: 'This is helper text',
  },
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * # HelperText Component
 * 
 * Provides contextual helper messages, error states, and form field guidance.
 * 
 * ## Features
 * - Error state styling
 * - Disabled state
 * - Accessibility attributes
 * - Responsive sizing
 * - Theme integration
 */
export const Default: Story = {
  args: {
    children: 'Form field instructions or contextual help'
  }
};

export const ErrorState: Story = {
  args: {
    error: true,
    children: 'This field is required'
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state for validation messages. Automatically adds ARIA attributes.'
      }
    }
  }
};

export const DisabledState: Story = {
  args: {
    disabled: true,
    children: 'Disabled field explanation'
  }
};

export const FormExample = () => (
  <div style={{ maxWidth: '300px' }}>
    <label htmlFor="email">Email</label>
    <input 
      id="email" 
      type="email" 
      aria-describedby="email-help"
      style={{ width: '100%', padding: '0.5rem' }}
    />
    <HelperText id="email-help">
      We'll never share your email with anyone else
    </HelperText>
  </div>
);

/**
 * ## Anatomy
 * 
 * - **Text**: Brief, contextual information
 * - **States**: Default, error, disabled
 * - **ARIA**: Role and live region for errors
 */
export const Anatomy = () => (
  <div style={{ display: 'grid', gap: '1rem' }}>
    <HelperText>Default helper text</HelperText>
    <HelperText error>Error message</HelperText>
    <HelperText disabled>Disabled text</HelperText>
  </div>
);

/**
 * ## Best Practices
 */
export const BestPractices = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <div>
      <h3>✅ Do</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Keep helper text concise and actionable</li>
        <li>Use error state for validation messages</li>
        <li>Associate with form fields using <code>aria-describedby</code></li>
        <li>Ensure sufficient color contrast</li>
      </ul>
    </div>
    
    <div>
      <h3>❌ Don't</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Use for lengthy explanations</li>
        <li>Override native error states unnecessarily</li>
        <li>Forget ARIA attributes for dynamic content</li>
        <li>Use low contrast colors</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for effective helper text implementation.'
    }
  }
};

/**
 * ## Accessibility
 * 
 * - Error messages get <code>role="alert"</code>
 * - Proper color contrast ratios
 * - Form field association via <code>id</code>
 * - Screen reader friendly markup
 */
export const Accessibility = () => (
  <div>
    <HelperText error id="error-example">
      This error message will be announced by screen readers
    </HelperText>
    <p style={{ marginTop: '1rem' }}>
      Note the <code>role="alert"</code> on error state.
    </p>
  </div>
);