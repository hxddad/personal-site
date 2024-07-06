// App.js
import React from 'react';
import './App.css';
import { ThemeProvider } from './ThemeContext';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  );
}

export default App;
