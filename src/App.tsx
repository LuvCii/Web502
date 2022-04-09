import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/viewer/Homepage';
import Product from './pages/viewer/Product';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import { ProductType } from './types/Product';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Cart from './pages/viewer/cart';
import IndexProduct from './pages/admin/product';
import AddProduct from './pages/admin/product/add';
import EditProduct from './pages/admin/product/edit';
import IndexUser from './pages/admin/user';
import IndexCate from './pages/admin/category';
import IndexCart from './pages/admin/cart';
import PrivateRouter from './components/PrivateRouter';
import { add, list, remove, update } from './api/product';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { User } from './types/User';
// import toastr from 'toastr'


function App() {
  const navigate = useNavigate();



  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await list();
      setUsers(data);
    }
    getUsers();
  }, []);

  // Remove User
  const onHandleRemoveUser = async (id: number | string) => {
    remove(id);
    // reRender
    setUsers(users.filter(item => item._id !== id));
  }



  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  // Remove product
  const onHandleRemove = async (id: number | string) => {
    remove(id);
    // reRender
    setProducts(products.filter(item => item._id !== id));
  }

  // Add product
  const onHandleAdd = async (product: ProductType) => {
    try {
      const { data } = await add(product);
      if (data) {
        toast.success("Them thanh cong");
        setProducts([...products, data]);
        setTimeout(() => {
          navigate('/admin/product')
        }, 2000)
      }
    } catch (error) {

    }
  }

  // Update Product
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error) {

    }
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

          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<IndexProduct products={products} onRemove={onHandleRemove} />} />
            <Route path="product/add" element={<AddProduct name='Dung' onAdd={onHandleAdd} />} />
            <Route path="product/:id/edit" element={<EditProduct name='Dung' onUpdate={onHandleUpdate} />} />
            <Route path="user" element={<IndexUser users={users} onRemove={onHandleRemoveUser} />} />
            <Route path="category" element={<IndexCate />} />
            <Route path="cart" element={<IndexCart />} />
          </Route>
          {/* router admin */}
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
