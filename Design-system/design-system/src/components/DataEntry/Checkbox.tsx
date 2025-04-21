import React from 'react';
import styled from 'styled-components';

interface CheckboxProps {
  checked: boolean;
  onChange: (checked: boolean) => void;
  label?: string;
  disabled?: boolean;
  id?: string;
}

const CheckboxContainer = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 0.5rem;
  user-select: none;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div<{ checked: boolean; disabled?: boolean }>`
  width: 1.25rem;
  height: 1.25rem;
  border: 2px solid ${({ checked }) => (checked ? '#3182ce' : '#e2e8f0')};
  border-radius: 0.25rem;
  background-color: ${({ checked }) => (checked ? '#3182ce' : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 0.75rem;
  transition: all 0.2s;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  &:hover {
    border-color: ${({ checked, disabled }) =>
      !disabled && (checked ? '#3182ce' : '#cbd5e0')};
  }

  ${HiddenCheckbox}:focus-visible + & {
    box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.3);
    outline: none;
  }
`;

const Checkmark = styled.svg`
  width: 0.75rem;
  height: 0.75rem;
  fill: white;
`;

const LabelText = styled.span<{ disabled?: boolean }>`
  color: ${({ disabled }) => (disabled ? '#a0aec0' : 'inherit')};
`;

export const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onChange,
  label = '',
  disabled = false,
  id,
}) => {
  const checkboxId = id || `checkbox-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <CheckboxContainer htmlFor={checkboxId} disabled={disabled}>
      <HiddenCheckbox
        id={checkboxId}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        disabled={disabled}
        aria-checked={checked}
        aria-disabled={disabled}
      />
      <StyledCheckbox checked={checked} disabled={disabled}>
        {checked && (
          <Checkmark viewBox="0 0 24 24" aria-hidden="true">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
          </Checkmark>
        )}
      </StyledCheckbox>
      {label && <LabelText disabled={disabled}>{label}</LabelText>}
    </CheckboxContainer>
  );
};