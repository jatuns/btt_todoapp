import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { TodoWrapper } from './components/TodoWrapper';
import { About } from './components/About';
import './App.css';

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="link">Home</Link>
        <Link to="/about" className="link">About</Link>      
      </nav>

      <Routes>
        <Route path="/" element={<TodoWrapper />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;