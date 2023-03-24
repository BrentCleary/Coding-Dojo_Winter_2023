import './App.css';

import React from 'react';
import {Routes, Route, Link} from 'react-router-dom';

import CreatePage from './views/CreatePage';
import DashboardPage from './views/DashboardPage';
import DetailsPage from './views/DetailsPage';
import UpdatePage from './views/UpdatePage';

function App() {
  return (
    <div className="App">
      <h1>Product Manager</h1>
      <div>
        <Link to='/products'>Dashboard</Link>
        <Link to='/products/new'>CreatePage</Link>
      </div>
      <Routes>
        <Route path='/products' element={<DashboardPage />} />
        <Route path='/products/new' element={<CreatePage />} />
        <Route path='/products/:id' element={<DetailsPage />} />
        <Route path='/products/:id/edit' element={<UpdatePage />} />
      </Routes>
    </div>
  );
}

export default App;
