import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'
import { Route, Routes, NavLink } from 'react-router-dom';
import { Product } from '../.history/src/types/product_20220314102851';

function App() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Product>({
    name: 'Tran Minh',
    age: 22
  });


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
