import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';
import { About } from './components/About';
import './App.css';
import { Counter } from "./components/Counter";   


function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>  
        <Link to="/counter" className='link'>Counter</Link>
      </nav>

      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/about" element={<About />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  );
}

export default App;