import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { UserType } from './types/user';
import type { ProductType } from './types/product'
import { add, list, remove, update } from './api/product';
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
import ProductEdit from './pages/ProductEdit';
import TestShowInfor from './components/TestShowInfor';
import PrivateRouter from './components/PrivateRouter';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import { signup } from './api/user';
import User from './pages/User';

function App() {

  const [users, setUser] = useState<UserType[]>([])
  // useEffect(() => {
  //   const getUsers = async () => {
  //     const { data } = await getAll();
  //     setUser(data)
  //   }
  //   getUsers();
  // }, []);

  //Add user
  const onHandleAddUser = async (user: any) => {
    const { data } = await signup(user);
    setUser([...users, data])
  }


  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  // Add Product
  const onHandleAdd = async (product: any) => {
    // console.log('app.js', product);
    // api
    const { data } = await add(product);
    //reRender
    setProducts([...products, data])
  }

  // Remove product
  const onHandleRemove = async (id?: number) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item.id !== id));
  }

  // Update product
  const onHandleUpdate = async (product: ProductType) => {
    try {
      //api 
      const { data } = await update(product);
      // reRender
      // Tạo ra 1 vòng lặp, nếu item.id  == id sản phẩm vừa cập nhật (data) , thì cập nhật ngược lại giữ nguyên
      setProducts(products.map(item => item.id === data.id ? product : item))
    } catch (error) {

    }
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
            <Route path="product/add" element={<ProductAdd onAdd={onHandleAdd} />} />
            <Route path="product">
              <Route index element={<ProductPage />} />
              <Route path=":id" element={<ProductDetail />} />
            </Route>

          </Route>

          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>} >
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product">
              <Route index element={<ProductManager products={products} onRemove={onHandleRemove} />} />
              <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} />} />
              <Route path="add" element={<ProductAdd onAdd={onHandleAdd} />} />
            </Route>
          </Route>
          <Route path='login' element={<h1>Login page</h1>}></Route>
          <Route path='signup' element={<Signup onAddUser={onHandleAddUser} />}></Route>
          <Route path='signin' element={<Signin />}></Route>
        </Routes>
      </main>
    </div>
  )
}

export default App
