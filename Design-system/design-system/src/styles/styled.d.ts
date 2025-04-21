// src/styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string;
      text: string;
      primary: string;
    };
    borderRadius: string;
    toast: {
      success: string;
      error: string;
      info: string;
    };
  }
}
