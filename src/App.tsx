import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/viewer/Homepage';
import Product from './pages/viewer/Product';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import type { ProductType } from './types/Product';
import { Route, Routes, Navigate } from 'react-router-dom';
import Signin from './pages/Signin';
import IndexProduct from './pages/admin/product';
import IndexUser from './pages/admin/user';
import IndexCate from './pages/admin/category';
import IndexCart from './pages/admin/cart';
import { list, remove } from './api/product'


function App() {

  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  // Remove product
  const onHandleRemove = async (id?: number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }

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
            <Route path="product" element={<IndexProduct products={products} onRemove={onHandleRemove} />} />
            <Route path="user" element={<IndexUser />} />
            <Route path="category" element={<IndexCate />} />
            <Route path="cart" element={<IndexCart />} />
          </Route>
          {/* router admin */}
          <Route path="signin" element={<Signin />} />
        </Routes>
      </main>
    </div>
  )
}
import index from './pages/admin/category';
import { add } from './api/product';

export default App
