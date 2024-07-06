// Home.js
import React from 'react';
import { useTheme } from '../ThemeContext';

const Home = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <h1>Welcome to the Home Page!</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Home;
