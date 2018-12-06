import React, { Component, useState } from "react";

import logo from "../../assets/logo.svg";

import "./App.css";

export function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>You've clicked {count} times on the button</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </header>
    </div>
  );
}
