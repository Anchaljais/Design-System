import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from '../components/DataEntry/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'DataEntry/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: 'Current checked state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    onChange: {
      action: 'changed',
      description: 'Callback when checked state changes',
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    label: {
      control: 'text',
      description: 'Label text displayed next to checkbox',
      table: {
        type: { summary: 'string' },
      },
    },
    disabled: {
      control: 'boolean',
      description: 'Disable interaction',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## Checkbox Component

A form control for binary selection with customizable appearance and behavior.

### Anatomy
1. Container (label element)
2. Hidden native checkbox (accessibility)
3. Visual checkbox indicator
4. Optional label text

### When to Use
- For binary choices (on/off)
- Terms and conditions acceptance
- Multiple item selection
- Toggle settings/features

### Accessibility
- Implements \`aria-checked\` and \`aria-disabled\`
- Keyboard operable (Space to toggle)
- Focus styles visible
- Proper label association
- Color contrast meets WCAG 2.1 AA
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

const InteractiveTemplate: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(args.checked || false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={(isChecked) => {
          setChecked(isChecked);
          args.onChange?.(isChecked);
        }}
      />
    );
  },
};

export const Default: Story = {
  ...InteractiveTemplate,
  args: {
    label: 'Enable notifications',
  },
  parameters: {
    docs: {
      description: {
        story: 'Basic checkbox with label. Click to toggle state.',
      },
    },
  },
};

export const Checked: Story = {
  ...InteractiveTemplate,
  args: {
    ...Default.args,
    checked: true,
  },
};

export const DisabledStates: Story = {
  render: () => {
    // Mock states that would persist if the checkboxes were enabled
    const uncheckedState = false;
    const checkedState = true;

    return (
      <div className="flex flex-col gap-4">
        <Checkbox
          label="Disabled unchecked"
          checked={uncheckedState}
          disabled
          onChange={() => {}}
        />
        <Checkbox
          label="Disabled checked"
          checked={checkedState}
          disabled
          onChange={() => {}}
        />
      </div>
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkboxes in disabled states maintain their appearance but cannot be interacted with.',
      },
    },
  },
};

export const WithoutVisibleLabel: Story = {
  render: (args) => {
    const [checked, setChecked] = useState(false);
    return (
      <Checkbox
        {...args}
        checked={checked}
        onChange={setChecked}
        aria-label="Hidden label checkbox"
      />
    );
  },
  parameters: {
    docs: {
      description: {
        story: 'Checkbox using only aria-label for screen readers.',
      },
    },
  },
};

export const BestPractices = () => (
  <div className="grid gap-6">
    <div>
      <h3 className="text-lg font-bold mb-2">Do's</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Always provide a visible label or aria-label</li>
        <li>Use for binary yes/no selections</li>
        <li>Group related checkboxes with fieldset/legend</li>
        <li>Maintain consistent sizing</li>
      </ul>
    </div>
    
    <div>
      <h3 className="text-lg font-bold mb-2">Don'ts</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Don't use for mutually exclusive options (use radio buttons)</li>
        <li>Don't make critical options dismissible</li>
        <li>Don't overload with too many checkboxes</li>
        <li>Don't use unclear label wording</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for proper checkbox usage in applications.',
    },
  },
};