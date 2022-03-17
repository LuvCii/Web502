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
        <Route path="/" element={<WebsiteLayout />} />
        <Route index element={<Homepage />} />
        <Route path="about" element={<h1>About page</h1>} />
      </main>
    </div>
  )
}

export default App
