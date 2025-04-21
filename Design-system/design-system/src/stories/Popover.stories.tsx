import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Popover } from '../components/Feedback/Popover';

const meta: Meta<typeof Popover> = {
  title: 'Feedback/Popover',
  component: Popover,
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Position of the popover relative to the trigger',
      table: {
        type: { summary: 'PopoverPosition' },
        defaultValue: { summary: 'bottom' },
      },
    },
    trigger: {
      control: { type: 'radio' },
      options: ['click', 'hover'],
      description: 'Interaction that triggers the popover',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'click' },
      },
    },
    closeOnContentClick: {
      control: 'boolean',
      description: 'Whether clicking the content closes the popover',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for the trigger button',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Toggle popover' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Popover Component

A floating panel that appears when interacting with a trigger element.

### Features
- Multiple positioning options (top, right, bottom, left)
- Click or hover trigger modes
- Accessible keyboard navigation
- Responsive design (adjusts position on small screens)
- Customizable content
- Focus trapping for keyboard users
- ARIA attributes for screen readers

### When to Use
- ✅ Display additional contextual information
- ✅ Show actions related to a specific element
- ✅ Provide tooltips for complex controls
- ✅ Create dropdown menus

### Accessibility
- Uses proper ARIA roles and attributes
- Supports keyboard navigation (Enter/Space to open, Escape to close)
- Focus trapping when open
- Screen reader announcements
- Proper focus styles
- Responsive behavior for mobile devices
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Basic: Story = {
  render: (args) => (
    <div className="storybook-center">
      <Popover {...args} />
    </div>
  ),
  args: {
    content: <div>This is a contextual message.</div>,
    position: 'bottom',
    children: (
      <button className="Button">
        Click me
      </button>
    ),
  },
};

export const Bottom: Story = {
  render: (args) => (
    <div className="storybook-center">
      <Popover {...args} />
    </div>
  ),
  args: {
    content: <div>This is a bottom message.</div>,
    position: 'bottom',
    children: (
      <button className="Button">
        Bottom
      </button>
    ),
  },
};

export const Left: Story = {
  render: (args) => (
    <div className="storybook-center">
      <Popover {...args} />
    </div>
  ),
  args: {
    content: <div>This is a left message.</div>,
    position: 'left',
    children: (
      <button className="Button">
        Left
      </button>
    ),
  },
};

export const PositionVariants: Story = {
  render: () => (
    <div className="storybook-center">
      <div className="flex flex-col gap-4 items-center">
        <Popover
          position="top"
          content={<div>This is a top message.</div>}
        >
          <button className="Button">Top</button>
        </Popover>
        <div className="flex gap-4">
          <Popover
            position="left"
            content={<div>This is a left message.</div>}
          >
            <button className="Button">Left</button>
          </Popover>
          <Popover
            position="right"
            content={<div>This is a right message.</div>}
          >
            <button className="Button">Right</button>
          </Popover>
        </div>
        <Popover
          position="bottom"
          content={<div>This is a bottom message.</div>}
        >
          <button className="Button">Bottom</button>
        </Popover>
      </div>
    </div>
  ),
};

export const WithActions: Story = {
  render: () => (
    <div className="storybook-center">
      <Popover
        position="top"
        content={
          <div>
            <p>Are you sure you want to delete this item?</p>
            <div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
              <button className="Button" style={{ backgroundColor: '#10B981', color: '#fff' }}>Confirm</button>
              <button className="Button" style={{ backgroundColor: '#EF4444', color: '#fff' }}>Cancel</button>
            </div>
          </div>
        }
      >
        <button className="Button" style={{ backgroundColor: '#6366F1', color: '#fff' }}>Delete</button>
      </Popover>
    </div>
  ),
};

export const HoverTrigger: Story = {
  render: (args) => (
    <div className="storybook-center">
      <Popover {...args} />
    </div>
  ),
  args: {
    trigger: 'hover',
    content: <div>This appears on hover</div>,
    children: <span style={{ color: '#3B82F6', textDecoration: 'underline' }}>Hover over me</span>,
  },
};

export const AccessibilityChecklist = () => (
  <div className="p-4">
    <h3 className="font-bold mb-2">Accessibility Verification</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>✅ Uses proper ARIA roles (button, dialog)</li>
      <li>✅ Supports keyboard navigation (Enter/Space/Escape)</li>
      <li>✅ Includes focus management</li>
      <li>✅ Provides screen reader announcements</li>
      <li>✅ Has sufficient color contrast</li>
      <li>✅ Includes visible focus indicators</li>
      <li>✅ Adapts to mobile viewports</li>
    </ul>
  </div>
);

export const BestPractices = () => (
  <div className="grid gap-4 p-4">
    <div>
      <h3 className="font-bold mb-2">Do's</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use for contextual information or actions</li>
        <li>Keep content concise and relevant</li>
        <li>Provide keyboard navigation</li>
        <li>Include proper ARIA attributes</li>
        <li>Consider mobile responsiveness</li>
        <li>Use hover triggers for non-critical information</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">Don'ts</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Don't overload with too much content</li>
        <li>Don't use for critical information that must always be visible</li>
        <li>Don't rely solely on hover for important functionality</li>
        <li>Don't nest popovers</li>
        <li>Don't use without proper accessibility features</li>
      </ul>
    </div>
  </div>
);