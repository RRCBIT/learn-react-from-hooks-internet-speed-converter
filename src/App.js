import React from 'react';
import logo from './logo.svg';
import './App.css';

function Todo({ todo }) {
  return (
    <div className="todo">
      {todo.text}
    </div>
  );
};

function App() {
  // ...
}

export default App;