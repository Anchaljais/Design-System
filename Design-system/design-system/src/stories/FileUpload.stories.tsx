import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { FileUpload } from '../components/DataEntry/FileUpload';

const meta: Meta<typeof FileUpload> = {
  title: 'DataEntry/FileUpload',
  component: FileUpload,
  tags: ['autodocs'],
  argTypes: {
    onFileSelect: {
      action: 'fileSelected',
      description: 'Callback when files are selected',
    },
    accept: {
      control: 'text',
      description: 'Accepted file types (e.g. "image/*", ".pdf")',
    },
    disabled: {
      control: 'boolean',
      description: 'Disable the file upload',
    },
    label: {
      control: 'text',
      description: 'Label for the upload button',
    },
    multiple: {
      control: 'boolean',
      description: 'Allow multiple file selection',
    },
    required: {
      control: 'boolean',
      description: 'Mark as required field',
    },
    maxSize: {
      control: 'number',
      description: 'Maximum file size in bytes',
    },
    errorMessage: {
      control: 'text',
      description: 'Custom error message to display',
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
## File Upload Component

A customizable file upload input with validation and preview capabilities.

### Features
- Single or multiple file upload
- File type restrictions
- File size validation
- File information display
- Accessible implementation
- Custom error messages
- Responsive design

### When to Use
- ✅ Uploading documents or media
- ✅ Form submissions with attachments
- ✅ Drag-and-drop alternative
- ✅ Any file input requirement

### Accessibility
- Proper labeling and ARIA attributes
- Keyboard navigable
- Screen reader support
- Clear error messaging
- Focus styles for keyboard users
        `,
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof FileUpload>;

export const Basic: Story = {
  args: {
    label: 'Upload file',
  },
};

export const MultipleFiles: Story = {
  args: {
    ...Basic.args,
    multiple: true,
    label: 'Upload files',
  },
};

export const ImageUpload: Story = {
  args: {
    ...Basic.args,
    accept: 'image/*',
    label: 'Upload image',
  },
};

export const WithMaxSize: Story = {
  args: {
    ...Basic.args,
    maxSize: 1024 * 1024, // 1MB
    label: 'Upload (max 1MB)',
  },
};

export const RequiredField: Story = {
  args: {
    ...Basic.args,
    required: true,
    label: 'Required upload',
  },
};

export const WithError: Story = {
  args: {
    ...Basic.args,
    errorMessage: 'Please select a valid file',
  },
};

export const DisabledState: Story = {
  args: {
    ...Basic.args,
    disabled: true,
  },
};

export const AccessibilityChecklist = () => (
  <div className="p-4">
    <h3 className="font-bold mb-2">Accessibility Verification</h3>
    <ul className="list-disc pl-5 space-y-1">
      <li>✅ Proper labeling and associations</li>
      <li>✅ Keyboard navigable and operable</li>
      <li>✅ Screen reader announcements</li>
      <li>✅ Clear error messaging</li>
      <li>✅ Sufficient color contrast</li>
      <li>✅ Focus styles for keyboard users</li>
      <li>✅ ARIA attributes for form status</li>
    </ul>
  </div>
);

export const BestPractices = () => (
  <div className="grid gap-4 p-4">
    <div>
      <h3 className="font-bold mb-2">Do's</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Provide clear file type and size requirements</li>
        <li>Use descriptive labels and error messages</li>
        <li>Include visual feedback for selected files</li>
        <li>Make it clear when upload is required</li>
        <li>Test with keyboard navigation</li>
        <li>Consider adding drag-and-drop as enhancement</li>
      </ul>
    </div>
    <div>
      <h3 className="font-bold mb-2">Don'ts</h3>
      <ul className="list-disc pl-5 space-y-1">
        <li>Don't rely solely on color for status indicators</li>
        <li>Don't accept files without validation</li>
        <li>Don't make the input area too small</li>
        <li>Don't forget to handle error states</li>
        <li>Don't omit file size information</li>
      </ul>
    </div>
  </div>
);