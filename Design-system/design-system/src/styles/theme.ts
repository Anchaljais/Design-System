// theme.ts
import { DefaultTheme } from 'styled-components';

export const lightTheme: DefaultTheme = {
  colors: {
    background: '#ffffff',
    text: '#000000',
    primary: '#007bff',
  },
  borderRadius: '4px',
  toast: {
    success: '#4CAF50',
    error: '#F44336',
    info: '#2196F3',
  },
};

export const darkTheme: DefaultTheme = {
  colors: {
    background: '#1e1e1e',
    text: '#ffffff',
    primary: '#3399ff',
  },
  borderRadius: '4px',
  toast: {
    success: '#81C784',
    error: '#E57373',
    info: '#64B5F6',
  },
};
