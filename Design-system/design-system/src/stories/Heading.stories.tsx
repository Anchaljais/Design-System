// src/components/Typography/Heading.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '../components/Typography/Heading';

const meta = {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  argTypes: {
    level: {
      control: { type: 'select', options: [1, 2, 3, 4, 5, 6] },
      description: 'Semantic heading level (h1-h6)',
      table: {
        type: { summary: '1 | 2 | 3 | 4 | 5 | 6' },
        defaultValue: { summary: '1' }
      }
    },
    color: {
      control: {
        type: 'select',
        options: ['primary', 'secondary', 'danger', 'success', 'warning', 'light', 'dark'],
      },
      description: 'Color variant from theme palette',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'primary' }
      }
    },
    responsive: {
      control: 'boolean',
      description: 'Enables responsive font sizing',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'true' }
      }
    }
  },
  args: {
    level: 1,
    children: 'Default Heading',
    responsive: true,
  },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * # Heading Component
 * 
 * Semantic heading elements with responsive sizing and theme support.
 * 
 * ## Features
 * - Semantic HTML headings (h1-h6)
 * - Responsive font sizing
 * - Light/dark mode support
 * - Accessible color contrast
 * - Themeable brand colors
 */
export const Default: Story = {};

/**
 * ## Heading Levels
 * 
 * Proper heading hierarchy is essential for accessibility and SEO.
 */
export const AllLevels = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Heading level={1}>Heading Level 1 (Page title)</Heading>
    <Heading level={2}>Heading Level 2 (Section)</Heading>
    <Heading level={3}>Heading Level 3 (Subsection)</Heading>
    <Heading level={4}>Heading Level 4</Heading>
    <Heading level={5}>Heading Level 5</Heading>
    <Heading level={6}>Heading Level 6</Heading>
  </div>
);

/**
 * ## Color Variants
 * 
 * All colors automatically adjust for proper contrast in light/dark modes.
 */
export const ColorVariants = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Heading level={2} color="primary">Primary (Brand color)</Heading>
    <Heading level={2} color="secondary">Secondary (Accent color)</Heading>
    <Heading level={2} color="danger">Danger (Error state)</Heading>
    <Heading level={2} color="success">Success (Confirmation)</Heading>
    <Heading level={2} color="warning">Warning (Caution)</Heading>
  </div>
);

/**
 * ## Best Practices
 * 
 * ### Dos and Don'ts
 */
export const BestPractices = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
    <div>
      <Heading level={3} color="success">✅ Do</Heading>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li>Use h1 for the main page title only</li>
        <li>Maintain proper heading hierarchy (don't skip levels)</li>
        <li>Use descriptive text that summarizes the content</li>
        <li>Choose color variants with sufficient contrast</li>
      </ul>
    </div>
    
    <div>
      <Heading level={3} color="danger">❌ Don't</Heading>
      <ul style={{ marginTop: '0.5rem', paddingLeft: '1.5rem' }}>
        <li>Use headings just for visual styling</li>
        <li>Use multiple h1 elements on a single page</li>
        <li>Use very long heading text</li>
        <li>Use low-contrast color combinations</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for proper usage of heading components to ensure accessibility and consistency.'
    }
  }
};

/**
 * ## Accessibility
 * 
 * Headings are critical for screen reader navigation and document structure.
 */
export const Accessibility = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
    <Heading level={2}>Proper Structure Example</Heading>
    <Heading level={3}>All color variants meet WCAG 2.1 AA contrast requirements</Heading>
    <Heading level={3}>Responsive sizing maintains readability across devices</Heading>
    <Heading level={3}>Dark mode support preserves contrast ratios</Heading>
  </div>
);