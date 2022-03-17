import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'
import { list } from './api/product';
import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';
import Dashboard from './pages/Dashboard';

function App() {

  const [products, setProducts] = useState<{ _id: Number, name: String }[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  })


  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >
            <Route index element={<Homepage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="about" element={<AboutPage />} />
          </Route>
          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<ProductManager />} />
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
