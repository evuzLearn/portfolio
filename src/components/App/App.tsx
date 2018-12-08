import React, { useState } from 'react';

import logo from '../../assets/logo.svg';
import { Button } from '../Button';

import './App.css';

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="app">
      <header className="app--header">
        <img src={logo} className="app--logo" alt="logo" />
        <p className="app--text">You've clicked {count} times on the button</p>
        <Button onClick={() => setCount(count + 1)}>Click me!</Button>
      </header>
    </div>
  );
}
