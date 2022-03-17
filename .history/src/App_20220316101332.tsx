import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'
import { list } from './api/product';
import { Route, Routes, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';

function App() {

  const [products, setProducts] = useState<{ _id: Number, name: String }[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
  })


  return (
    <div className="App">
      <header>
        <ul>
          <li><NavLink to="/">Home Page</NavLink></li>
          <li><NavLink to="/product">Product</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<h1>Home page</h1>} />
          <Route path="product" element={<h1>Product page</h1>} />
          <Route path="about" element={<h1>About page</h1>} />
        </Routes>
      </main>
    </div>
  )
}

export default App
