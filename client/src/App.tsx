import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './styles/client.scss';

import { Home } from './pages/home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
