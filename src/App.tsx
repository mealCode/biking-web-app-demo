import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DashboardPage from 'pages/Dashboard';

import './index.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardPage />} />
    </Routes>
  );
}

export default App;
