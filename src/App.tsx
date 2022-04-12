import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Homepage from './pages/viewer/Homepage';
import Product from './pages/viewer/Product';
import ProductDetail from './pages/viewer/ProductDetail';
import Dashboard from './pages/admin/Dashboard';
import AdminLayout from './pages/layouts/AdminLayout';
import WebsiteLayout from './pages/layouts/WebsiteLayout';
import { ProductType } from './types/Product';
import { User } from './types/User';
import { Category } from './types/category';
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Profile from './pages/viewer/profile';
import Cart from './pages/viewer/cart';
import IndexProduct from './pages/admin/product';
import AddProduct from './pages/admin/product/add';
import EditProduct from './pages/admin/product/edit';
import IndexUser from './pages/admin/user';
import IndexCate from './pages/admin/category';
import IndexCart from './pages/admin/cart';
import PrivateRouter from './components/PrivateRouter';
import { add, list, remove, update } from './api/product';
import { listUser, removeUser, updateUser } from './api/user';
import { listCate, removeCate, updateCate, readProductByCate } from './api/category';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import Search from './pages/viewer/search';
import ProductOfCate from './pages/viewer/ProductOfCate';


function App() {
  const navigate = useNavigate();


  // TODO .... USER
  const [users, setUsers] = useState<User[]>([])
  useEffect(() => {
    const getUsers = async () => {
      const { data } = await listUser();
      setUsers(data);
    }
    getUsers();
  }, []);

  // Remove User
  const onHandleRemoveUser = async (id: number) => {
    if (window.confirm('Bạn có muốn xóa người dùng này không ?')) {
      removeUser(id);
      // reRender
      setUsers(users.filter(item => item._id !== id));
      toast.success("Xóa thành công !");
      <ToastContainer />
    }
  }

  // Update User
  const onHandleUpdateUser = async (user: User) => {
    try {
      const { data } = await updateUser(user);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error) {

    }
  }


  // TODO .... END USER




  // TODO .... CATEGORY
  const [cate, setCate] = useState<Category[]>([])
  useEffect(() => {
    const getCate = async () => {
      const { data } = await listCate();
      // console.log(data);
      setCate(data);
    }
    getCate();
  }, []);
  // Remove Cate
  const onHandleRemoveCate = async (id: number) => {
    if (window.confirm('Bạn có muốn xóa danh mục này không ?')) {
      remove(id);
      // reRender
      setCate(cate.filter(item => item._id !== id));
      toast.success("Xóa thành công !");
      <ToastContainer />
    }
  }
  // TODO .... END CATEGORY




  // TODO .... PRODUCT
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts();
  }, []);

  // Remove product
  const onHandleRemove = async (id: number) => {
    if (window.confirm('Bạn có muốn xóa sản phẩm này không ?')) {
      remove(id);
      // reRender
      setProducts(products.filter(item => item._id !== id));
      toast.success("Xóa thành công !");
      <ToastContainer />
    }
  }

  // Add product
  const onHandleAdd = async (product: ProductType) => {
    try {
      const { data } = await add(product);
      if (data) {
        toast.success("Thêm thành công!");
        setProducts([...products, data]);
        setTimeout(() => {
          navigate('/admin/product')
        }, 1000)
      }
    } catch (error) {

    }
  }


  // Update Product
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      if (data) {
        toast.success("Sửa thành công");
        setProducts([...products, data]);
        setTimeout(() => {
          navigate('/admin/product')
        }, 1000)
      }
    } catch (error) {

    }
  }
  // TODO .... END PRODUCT



  return (
    <div className="App">
      <main>
        <Routes>

          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<Homepage />} />
            <Route path="product" element={<Product products={products} />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/product" element={<Search products={products} />} />
            <Route path="/product/category/:id" element={<ProductOfCate />} />
          </Route>
          {/* router viewer */}

          <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
            <Route index element={<Navigate to="/admin/dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="product" element={<IndexProduct products={products} onRemove={onHandleRemove} />} />
            <Route path="product/add" element={<AddProduct name='Dung' onAdd={onHandleAdd} />} />
            <Route path="product/:id/edit" element={<EditProduct name='Dung' onUpdate={onHandleUpdate} />} />
            <Route path="user" element={<IndexUser users={users} onRemove={onHandleRemoveUser} />} />
            <Route path="category" element={<IndexCate cate={cate} onRemove={onHandleRemoveCate} />} />
            <Route path="cart" element={<IndexCart />} />
          </Route>
          {/* router admin */}
          <Route path="profile" element={<Profile />} />
          <Route path="signin" element={<Signin />} />
          <Route path="signup" element={<Signup />} />

          <Route path="cart" element={<Cart />} />
        </Routes>
      </main>
    </div>
  )

}

export default App
