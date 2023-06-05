import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Graph from './pages/Graph';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/" element={<Contact />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
