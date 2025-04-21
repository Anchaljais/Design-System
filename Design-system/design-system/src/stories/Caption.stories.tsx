import type { Meta, StoryObj } from '@storybook/react';
import { Caption } from '../components/Typography/Caption';

const meta: Meta<typeof Caption> = {
  title: 'Typography/Caption',
  component: Caption,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'Small, supportive text with accessible contrast and responsive behavior. Used for captions, helper text, and secondary information.',
      },
    },
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content of the caption',
      table: {
        type: { summary: 'ReactNode' }
      }
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the caption with reduced opacity',
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    variant: {
      control: 'radio',
      options: ['default', 'strong'],
      description: 'Visual weight variant',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    color: {
      control: 'select',
      options: ['default', 'primary', 'error', 'success'],
      description: 'Color variant from theme palette',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    }
  },
  args: {
    children: 'This is a caption',
    disabled: false,
    variant: 'default',
    color: 'default'
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * # Caption Component
 * 
 * Small, supportive text with accessible contrast and responsive behavior.
 * 
 * ## Features
 * - Responsive sizing (adapts to screen size)
 * - Dark mode support
 * - Multiple color variants
 * - Disabled state
 * - Strong/regular variants
 * - Accessible contrast ratios
 */
export const Default: Story = {
  args: {
    children: 'Default caption text'
  }
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Caption>Default variant (400 weight)</Caption>
      <Caption variant="strong">Strong variant (500 weight)</Caption>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates the available typography variants.'
      }
    }
  }
};

export const ColorVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Caption>Default color</Caption>
      <Caption color="primary">Primary color (brand/accent)</Caption>
      <Caption color="error">Error color (validation)</Caption>
      <Caption color="success">Success color (confirmation)</Caption>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Different color variants available for the caption.'
      }
    }
  }
};

export const DisabledState: Story = {
  args: {
    children: 'Disabled caption text',
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state with reduced opacity (50%) and not-allowed cursor.'
      }
    }
  }
};

export const DarkModePreview: Story = {
  parameters: {
    docs: {
      description: {
        story: 'Demonstrates caption appearance in dark mode with proper contrast.'
      }
    }
  },
  decorators: [
    (Story) => (
      <div data-theme="dark" style={{ 
        backgroundColor: '#1F2937', 
        padding: '1rem',
        borderRadius: '0.5rem'
      }}>
        <Story />
      </div>
    )
  ],
  render: () => (
    <>
      <Caption>Caption in dark mode</Caption>
      <div style={{ marginTop: '0.5rem' }}>
        <Caption disabled>Disabled in dark mode</Caption>
      </div>
      <div style={{ marginTop: '0.5rem' }}>
        <Caption color="primary">Primary color in dark mode</Caption>
      </div>
    </>
  )
};

export const ResponsiveBehavior: Story = {
  render: () => (
    <div>
      <Caption>This caption will shrink from 12px to 11px on mobile</Caption>
      <p style={{ fontSize: '0.875rem', marginTop: '0.5rem' }}>
        Resize the viewport below 600px to see the font size adjust.
      </p>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Font size adjusts for smaller screens (below 600px) to maintain readability.'
      }
    }
  }
};

/**
 * ## Anatomy
 * 
 * - **Text**: Small, supportive content
 * - **Variants**: Regular (400) and Strong (500)
 * - **Color Options**: Default, Primary, Error, Success
 * - **States**: Default, Disabled
 * - **Responsive**: Adjusts for mobile (below 600px)
 */
export const ComponentAnatomy = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <Caption>Default caption</Caption>
    <Caption variant="strong">Strong caption</Caption>
    <Caption color="primary">Primary color caption</Caption>
    <Caption color="error">Error state caption</Caption>
    <Caption color="success">Success state caption</Caption>
    <Caption disabled>Disabled caption</Caption>
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
        <li>Use for supporting text below form fields</li>
        <li>Keep captions concise and clear (1-2 lines max)</li>
        <li>Use color variants to convey meaning (error, success)</li>
        <li>Test contrast in both light and dark modes</li>
        <li>Pair with form controls using aria-describedby</li>
      </ul>
    </div>
    
    <div>
      <h3 style={{ margin: 0 }}>❌ Don't</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Don't use for primary content</li>
        <li>Avoid long paragraphs in captions</li>
        <li>Don't override the responsive behavior</li>
        <li>Avoid low contrast color combinations</li>
        <li>Don't use for interactive elements</li>
      </ul>
    </div>
  </div>
);

/**
 * ## Accessibility
 * 
 * - Meets WCAG AA contrast requirements in all variants
 * - Responsive sizing maintains readability
 * - Semantic HTML usage (span for inline, p for block)
 * - Dark mode compatibility
 * - Forced colors mode support
 * - Proper ARIA attributes for disabled state
 */
export const AccessibilityFeatures = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <Caption>Meets WCAG AA contrast requirements (4.5:1 minimum)</Caption>
    <Caption disabled aria-describedby="disabled-desc">
      Disabled state maintains accessibility
    </Caption>
    <p id="disabled-desc" style={{ fontSize: '0.75rem', margin: 0 }}>
      Disabled captions use both visual and ARIA cues
    </p>
    <Caption color="error">Error state remains accessible</Caption>
    <div style={{ fontSize: '0.75rem', marginTop: '0.5rem' }}>
      All variants work in forced colors mode (Windows High Contrast)
    </div>
  </div>
);

/**
 * ## Theming
 * 
 * Customize the appearance using CSS variables:
 * 
 * ```css
 * :root {
 *   --caption-color-default: #4B5563;
 *   --caption-color-primary: #3B82F6;
 *   --caption-color-error: #EF4444;
 *   --caption-color-success: #10B981;
 * }
 * 
 * [data-theme="dark"] {
 *   --caption-color-default: #9CA3AF;
 *   --caption-color-primary: #60A5FA;
 *   --caption-color-error: #F87171;
 *   --caption-color-success: #34D399;
 * }
 * ```
 */
export const ThemingGuide = () => (
  <div style={{ fontSize: '0.875rem' }}>
    <p>Override the CSS variables to customize colors:</p>
    <pre style={{
      backgroundColor: '#F3F4F6',
      padding: '1rem',
      borderRadius: '0.375rem',
      overflowX: 'auto'
    }}>
      {`:root {
  --caption-color-default: #4B5563;
  --caption-color-primary: #3B82F6;
  --caption-color-error: #EF4444;
  --caption-color-success: #10B981;
}

[data-theme="dark"] {
  --caption-color-default: #9CA3AF;
  --caption-color-primary: #60A5FA;
  --caption-color-error: #F87171;
  --caption-color-success: #34D399;
}`}
    </pre>
  </div>
);