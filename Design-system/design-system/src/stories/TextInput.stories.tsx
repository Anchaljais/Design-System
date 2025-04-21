import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { TextInput, TextInputProps } from '../components/DataEntry/TextInput';

const meta: Meta<TextInputProps> = {
  title: 'DataEntry/TextInput',
  component: TextInput,
  argTypes: {
    type: {
      control: { type: 'select' },
      options: ['text', 'password', 'email', 'number'],
    },
    disabled: { control: 'boolean' },
    size: {
      control: { type: 'radio' },
      options: ['small', 'medium', 'large'],
    },
    required: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: `
### Text Input Component

A customizable text input field with support for various states and variants.

#### Best Practices

##### Do's
- ✅ Always pair inputs with visible, descriptive labels
- ✅ Use proper input types (email, password, etc.) for better UX
- ✅ Provide clear error messages when validation fails
- ✅ Use the \`required\` prop for mandatory fields
- ✅ Support keyboard navigation and screen readers
- ✅ Use the \`placeholder\` attribute for input format examples
- ✅ Consider adding help text for complex inputs
- ✅ Use icons to enhance visual recognition when appropriate

##### Don'ts
- ❌ Don't use placeholder text as a label replacement
- ❌ Don't remove focus outlines completely (accessibility requirement)
- ❌ Don't make touch targets too small (minimum 48x48px recommended)
- ❌ Don't rely solely on color to convey errors (use text too)
- ❌ Don't disable inputs without explaining why
- ❌ Don't use generic labels like "Click here" or "Enter text"
- ❌ Don't forget to test with screen readers
- ❌ Don't make inputs too wide (consider max-width for readability)

#### Accessibility
- Uses proper ARIA attributes (\`aria-invalid\`, \`aria-required\`)
- Error messages have \`role="alert"\` for screen readers
- Supports keyboard navigation (Tab, Shift+Tab)
- Includes visual focus indicators
- Works with screen readers (tested with VoiceOver and NVDA)
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<TextInputProps>;

const WithState = (args: any) => {
  const [value, setValue] = useState('');
  return <TextInput {...args} value={value} onChange={setValue} />;
};

export const Default: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    placeholder: 'Enter text here...',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic text input with placeholder. Always include a label in production use.',
      },
    },
  },
};

export const WithLabel: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Username',
    placeholder: 'Enter your username',
  },
  parameters: {
    docs: {
      description: {
        story: 'Properly labeled input field. Labels should be clear and descriptive.',
      },
    },
  },
};

export const PasswordInput: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Password',
    type: 'password',
    placeholder: 'Enter your password',
  },
  parameters: {
    docs: {
      description: {
        story: 'Password field with obscured input. Consider adding password strength indicators.',
      },
    },
  },
};

export const WithError: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    error: 'Invalid email address',
  },
  parameters: {
    docs: {
      description: {
        story: 'Error state with descriptive message. Errors should be helpful and specific.',
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Disabled Field',
    placeholder: 'Cannot edit this',
    disabled: true,
    value: 'Disabled value',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled input state. Consider explaining why a field is disabled if not obvious.',
      },
    },
  },
};

export const SmallInput: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Small Input',
    size: 'small',
  },
  parameters: {
    docs: {
      description: {
        story: 'Compact input for space-constrained interfaces. Ensure it remains usable.',
      },
    },
  },
};

export const WithIcon: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Email Address',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
      </svg>
    ),
  },
  parameters: {
    docs: {
      description: {
        story: 'Input with decorative icon. Icons should enhance recognition without replacing labels.',
      },
    },
  },
};

export const ReadOnly: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Account ID',
    value: 'CANNOT_BE_CHANGED',
    readOnly: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Read-only field for displaying non-editable information. Differentiate visually from editable fields.',
      },
    },
  },
};

export const RequiredField: Story = {
  render: (args) => <WithState {...args} />,
  args: {
    label: 'Username',
    required: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Required field with visual indicator. Always pair with client-side validation.',
      },
    },
  },
};

export const FullWidth: Story = {
  render: (args) => (
    <div style={{ width: '300px', border: '1px dashed #ccc', padding: '1rem' }}>
      <WithState {...args} />
    </div>
  ),
  args: {
    label: 'Full Width Input',
    fullWidth: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Input that expands to fill its container. Useful for responsive layouts.',
      },
    },
  },
};