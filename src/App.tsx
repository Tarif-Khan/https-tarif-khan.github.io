import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Experiences from './pages/Experiences';
import Contact from './pages/Contact';
import './styles/layout.css';
import Projects from './pages/Projects';

function App() {
  return (
    <Router>
      <div className="page-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experiences" element={<Experiences />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;