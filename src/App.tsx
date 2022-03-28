import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/viewer/Homepage';
import Product from './pages/viewer/Product';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import { Route, Routes, Navigate } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <main>
        <Routes>

          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product />} />

          </Route>
          {/* router viewer */}

          <Route path="admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          {/* router admin */}
        </Routes>
      </main>
    </div>
  )
}

export default App
