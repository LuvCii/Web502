import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { ProductType } from './types/product'
import { add, list } from './api/product';
import { Navigate, Route, Routes, NavLink } from 'react-router-dom';
import Homepage from './pages/Homepage';
import AboutPage from './pages/AboutPage';
import ProductPage from './pages/ProductPage';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import AdminLayout from './pages/layouts/AdminLayout';
import ProductManager from './pages/ProductManager';
import Dashboard from './pages/Dashboard';
import ProductDetail from './pages/ProductDetail';
import ProductAdd from './pages/ProductAdd';

function App() {

  const [products, setProducts] = useState<{ _id: Number, name: String }[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, [])

  const onHandleAdd = async (product: any) => {
    // console.log('app.js', product);
    // api
    const { data } = await add(product);
    //reRender
    setProducts([...products, data])

  }

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
          <Route path="/" element={<WebsiteLayout />} >

            <Route index element={<Homepage />} />
            <Route path="product" element={<ProductPage />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="about" element={<AboutPage />} />
            <Route path="product/add" element={<ProductAdd name="Dung" onAdd={onHandleAdd} />} />
          </Route>

          <Route path="admin" element={<AdminLayout />} >
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ProductManager products={products} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
          </Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
