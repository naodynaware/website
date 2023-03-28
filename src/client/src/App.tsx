import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import './styles/client.scss';

import { Home } from './pages/home';
import { Post } from './pages/post';
import { Navbar } from './components/navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<Post />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
