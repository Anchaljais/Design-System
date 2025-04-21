import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { CustomDatePicker } from '../components/DataEntry/DatePicker';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../styles/theme'; // adjust path if needed



const meta: Meta<typeof CustomDatePicker> = {
  title: 'DataEntry/DatePicker',
  component: CustomDatePicker,
  tags: ['autodocs'],
  argTypes: {
    selected: {
      control: { type: 'date' },
      description: 'Currently selected date',
    },
    onChange: {
      action: 'dateChanged',
      description: 'Date change handler',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text',
      table: {
        defaultValue: { summary: 'Select date' },
      },
    },
    label: {
      control: { type: 'text' },
      description: 'Label for the date picker',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disable the date picker',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    minDate: {
      control: { type: 'date' },
      description: 'Minimum selectable date',
    },
    maxDate: {
      control: { type: 'date' },
      description: 'Maximum selectable date',
    },
    error: {
      control: { type: 'text' },
      description: 'Error message',
    },
    required: {
      control: { type: 'boolean' },
      description: 'Mark as required field',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## DatePicker Component

A customizable date selection component with calendar interface.

### When to Use
- When users need to select a specific date
- For birth dates, appointment scheduling
- Any form requiring date input

### Accessibility
- Keyboard navigable
- Screen reader friendly
- Proper label association
- ARIA attributes for calendar controls
- Focus management
        `,
      },
    },
  },
  decorators: [
    (Story, context) => (
      <ThemeProvider theme={context.globals.theme === 'dark' ? darkTheme : lightTheme}>
        <div style={{ padding: '2rem', maxWidth: '300px' }}>
          <Story />
        </div>
      </ThemeProvider>
    ),
  ],
};




export default meta;

type Story = StoryObj<typeof CustomDatePicker>;

const InteractiveDatePicker = (args: any) => {
  const [date, setDate] = useState<Date | null>(args.selectedDate ? new Date(args.selectedDate) : null);
  return (
    <CustomDatePicker
      {...args}
      selectedDate={date}
      onChange={(newDate) => {
        setDate(newDate);
        args.onChange?.(newDate);
      }}
    />
  );
};

export const Default: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    placeholder: 'Select date',
  },
};

export const WithLabel: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    ...Default.args,
    label: 'Birth Date',
  },
  parameters: {
    docs: {
      description: {
        story: 'DatePicker with visible label for better accessibility.',
      },
    },
  },
};

export const WithMinMax: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    ...WithLabel.args,
    minDate: new Date(2000, 0, 1),
    maxDate: new Date(),
  },
  parameters: {
    docs: {
      description: {
        story: 'DatePicker with restricted date range (2000 to today).',
      },
    },
  },
};

export const Disabled: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    ...WithLabel.args,
    disabled: true,
  },
};

export const WithError: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    ...WithLabel.args,
    error: 'Please select a valid date',
  },
};

export const Required: Story = {
  render: (args) => <InteractiveDatePicker {...args} />,
  args: {
    ...WithLabel.args,
    required: true,
  },
};

export const BestPractices = () => (
  <div className="grid gap-4">
    <div>
      <h3 className="font-bold mb-2">Do's</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Use for precise date selection</li>
        <li>Provide clear labels</li>
        <li>Set reasonable date ranges when applicable</li>
        <li>Use consistent date formatting</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">Don'ts</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Don't use for date ranges (use a range picker instead)</li>
        <li>Don't make year selection too cumbersome</li>
        <li>Don't forget mobile-friendly design</li>
      </ul>
    </div>
  </div>
);

BestPractices.parameters = {
  docs: {
    description: {
      story: 'Guidelines for proper date picker usage in forms.',
    },
  },
};