import type { Meta, StoryObj } from '@storybook/react';
import { Label } from '../components/Typography/Label';

const meta: Meta<typeof Label> = {
  title: 'Typography/Label',
  component: Label,
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Show required field indicator',
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
    htmlFor: {
      control: 'text',
      description: 'ID of associated form element'
    },
    children: {
      control: 'text',
      description: 'Label text content',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    children: 'Form Label',
    required: false,
    disabled: false,
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * # Label Component
 * 
 * Accessible form labels with multiple states and theming support.
 * 
 * ## Features
 * - Semantic HTML label element
 * - Required field indicator
 * - Disabled state styling
 * - Form control association
 * - Responsive design
 * - Dark mode support
 */
export const Default: Story = {
  args: {
    children: 'Default Label'
  }
};

export const RequiredLabel: Story = {
  name: 'Required Label',
  args: {
    required: true,
    children: 'Required Field'
  },
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates a label with required field indicator (red asterisk).'
      }
    }
  }
};

export const DisabledLabel: Story = {
  name: 'Disabled Label',
  args: {
    disabled: true,
    children: 'Disabled Field'
  },
  parameters: {
    docs: {
      description: {
        story: 'Shows the disabled state with reduced opacity and not-allowed cursor.'
      }
    }
  }
};

export const FormAssociation: Story = {
  name: 'Form Association',
  args: {
    htmlFor: 'email-input',
    children: 'Email Address'
  },
  render: (args) => (
    <div style={{ maxWidth: '300px', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Label {...args}>Email Address</Label>

      <input
        id="email-input"
        type="email"
        style={{
          width: '100%',
          padding: '0.5rem',
          border: '1px solid #D1D5DB',
          borderRadius: '0.375rem'
        }}
      />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates proper label association with a form input using htmlFor.'
      }
    }
  }
};

/**
 * ## Anatomy
 * 
 * - **Text**: Descriptive content (required)
 * - **Required Indicator**: Red asterisk (*) when required
 * - **Association**: Linked via htmlFor to form controls
 * - **States**: Default, required, disabled
 */
export const ComponentAnatomy = () => (
  <div style={{ display: 'grid', gap: '1rem', maxWidth: '300px' }}>
    <Label>Default Label</Label>
    <Label required>Required Label</Label>
    <Label disabled>Disabled Label</Label>
    <Label htmlFor="anatomy-input">Associated Label</Label>
    <input id="anatomy-input" type="text" />
  </div>
);

ComponentAnatomy.parameters = {
  docs: {
    description: {
      story: 'Visual breakdown of the label component structure and variations.'
    }
  }
};

/**
 * ## Best Practices
 * 
 * ### Dos and Don'ts
 */
export const BestPractices = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
    <div>
      <h3 style={{ margin: 0 }}>✅ Do</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Always associate labels with form controls using <code>htmlFor</code></li>
        <li>Mark required fields clearly with the required indicator</li>
        <li>Keep label text concise and descriptive</li>
        <li>Use sentence case for label text</li>
      </ul>
    </div>
    
    <div>
      <h3 style={{ margin: 0 }}>❌ Don't</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Don't use placeholder text as a replacement for labels</li>
        <li>Avoid overly long or complex label text</li>
        <li>Don't forget to test label associations with screen readers</li>
        <li>Avoid low contrast colors that reduce readability</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for implementing accessible and effective form labels.'
    }
  }
};

/**
 * ## Accessibility
 * 
 * - Proper form control association via <code>htmlFor</code>
 * - Required state communicated visually and to screen readers
 * - Sufficient color contrast in all states
 * - Clear visual hierarchy
 * - Responsive design
 */
export const AccessibilityFeatures = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Label htmlFor="accessibility-demo" required>
      Accessible Label Example
    </Label>
    <input
      id="accessibility-demo"
      type="text"
      style={{
        padding: '0.5rem',
        border: '1px solid #D1D5DB',
        borderRadius: '0.25rem',
        maxWidth: '300px'
      }}
    />
    <p style={{ marginTop: '1rem', fontSize: '0.875rem' }}>
      This example demonstrates proper label association and required field indication.
      Screen readers will announce both the label text and required status.
    </p>
  </div>
);

AccessibilityFeatures.parameters = {
  docs: {
    description: {
      story: 'Key accessibility features implemented in the label component.'
    }
  }
};