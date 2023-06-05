import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddContact from './pages/AddContact';
import ContactList from './pages/ContactList';
import EditContact from './pages/EditContact';
import Graph from './pages/Graph';

const App = () => {
  return (
    <Router>
      <div className="flex">
        <Sidebar />
        <div className="flex-grow p-4">
          <Routes>
            
            <Route path="/" element={<ContactList />} />
            <Route path="/add-contact" element={<AddContact />} />
            <Route path="/edit-contact/:id" element={<EditContact />} />
            <Route path="/graph" element={<Graph />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
