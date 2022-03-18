import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'
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
    console.log('app.js', product);
    // api
    const { data } = await add(product);
    //reRender
    setProducts([...products, data])

  }

  return (
    <div className="App">
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />} >

            <Route index element={<Homepage />} />
            {/* Cách 1: để vào chi tiết sản phẩm 
                <Route path="product">
                  <Route element={<ProductPage />} />
                  <Route path=":id" element={<ProductDetail />} />
                </Route> */}
            {/* Cách 2: để vào chi tiết sản phẩm */}
            <Route path="product" element={<ProductPage products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="about" element={<AboutPage />} />
            <Route path="product/add" element={<ProductAdd name="Dung" onAdd={onHandleAdd} />} />
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
