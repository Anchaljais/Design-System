import type { Meta, StoryObj } from '@storybook/react';
import { Paragraph } from '../components/Typography/Paragraph';

const meta: Meta<typeof Paragraph> = {
  title: 'Typography/Paragraph',
  component: Paragraph,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: { 
        type: 'radio',
        options: ['default', 'lead'],
      },
      description: 'Paragraph variant style',
      table: {
        defaultValue: { summary: 'default' }
      }
    },
    children: {
      control: 'text',
      description: 'Paragraph content'
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes'
    },
    id: {
      control: 'text',
      description: 'HTML id attribute'
    }
  },
  args: {
    children: 'This is sample paragraph text demonstrating the typography component.',
    variant: 'default',
  },
} satisfies Meta<typeof Paragraph>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * # Paragraph Component
 * 
 * Standard body text with multiple variants and responsive sizing.
 * 
 * ## Features
 * - Default and lead variants
 * - Responsive typography
 * - Dark mode support
 * - Accessible contrast ratios
 */
export const Default: Story = {
  args: {
    children: 'This is a default paragraph with regular text styling. It should be used for most body text content in your application.',
  },
};

export const LeadVariant: Story = {
  name: 'Lead Paragraph',
  args: {
    variant: 'lead',
    children: 'Lead paragraphs introduce sections with slightly larger text. Use them for introductory text or to emphasize important content.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Slightly larger paragraph variant for introductory text or emphasis.'
      }
    }
  }
};
// Add to your Paragraph.stories.tsx
export const ContrastExamples = () => (
  <div style={{ display: 'grid', gap: '1.5rem' }}>
    <div style={{ background: '#F9FAFB', padding: '2rem' }}>
      <Paragraph variant="lead">Lead paragraph on light background</Paragraph>
      <Paragraph>Default paragraph on light background</Paragraph>
    </div>
    <div style={{ background: '#111827', padding: '2rem' }}>
      <Paragraph variant="lead">Lead paragraph on dark background</Paragraph>
      <Paragraph>Default paragraph on dark background</Paragraph>
    </div>
  </div>
);

ContrastExamples.parameters = {
  docs: {
    description: {
      story: 'Demonstrates paragraph visibility across different backgrounds.'
    }
  }
};
export const ResponsiveExample = () => (
  <div>
    <Paragraph variant="lead">
      This lead paragraph will grow larger on tablet and desktop views.
    </Paragraph>
    <Paragraph>
      Regular paragraph text remains readable at all screen sizes. Resize the viewport to see the responsive behavior.
    </Paragraph>
  </div>
);

/**
 * ## Anatomy
 * 
 * - **Text**: Body content with semantic HTML
 * - **Variants**: Default (16px) and Lead (18px/20px)
 * - **Spacing**: Consistent margin-bottom
 */
export const Anatomy = () => (
  <div style={{ display: 'grid', gap: '1rem' }}>
    <Paragraph variant="lead">
      Lead paragraph variant (larger text)
    </Paragraph>
    <Paragraph>
      Default paragraph variant
    </Paragraph>
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
        <li>Use lead variant for introductory text</li>
        <li>Keep paragraphs under 5-6 lines for readability</li>
        <li>Ensure sufficient contrast with background</li>
        <li>Use proper semantic HTML structure</li>
      </ul>
    </div>
    
    <div>
      <h3>❌ Don't</h3>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.25rem' }}>
        <li>Use for UI labels or form instructions</li>
        <li>Override line-height excessively</li>
        <li>Use multiple lead paragraphs consecutively</li>
        <li>Forget to test in dark mode</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for effective paragraph usage in your application.'
    }
  }
};

/**
 * ## Accessibility
 * 
 * - Proper semantic HTML (`<p>` tags)
 * - Responsive line-height (1.5 for readability)
 * - System font stack for familiarity
 * - Dark mode and forced colors support
 */
