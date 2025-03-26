import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ApplyList from './components/ApplyList';

function App() {
  return (
    <Router>
        <nav>
          <Link to="/">Home</Link>
          <br />
          <Link to="/applylist">ApplyList</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/applylist" element={<ApplyList />} />
      </Routes>
    </Router>
  )
}

export default App
