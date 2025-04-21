import React from 'react';
import logo from './logo.svg';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { lightTheme } from '../src/styles/theme';

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <div className="min-h-screen flex items-center justify-center bg-gray-200">
        <h1 className="text-6xl font-bold text-green-500">
          Tailwind CSS is working!
        </h1>
      </div>
    </ThemeProvider>
  );
}

export default App;
