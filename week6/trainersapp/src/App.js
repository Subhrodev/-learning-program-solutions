import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Home';
import TrainersList from './TrainerList';
import TrainerDetail from './TrainerDetail';
import trainers from './trainerMock';

function App() {
  return (
    <Router>
      <nav style={{ marginBottom: '20px' }}>
        <Link to="/" style={{ marginRight: '15px' }}>Home</Link>
        <Link to="/trainers">Trainers</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/trainers" element={<TrainersList trainers={trainers} />} />
        <Route path="/trainers/:id" element={<TrainerDetail />} />
      </Routes>
    </Router>
  );
}

export default App;

