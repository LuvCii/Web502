import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'
import { Route, Routes } from 'react-router-dom';

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
          <li><a href=""></a></li>
          <li><a href=""></a></li>
          <li><a href=""></a></li>
        </ul>
      </header>
      <main>
        <Routes>
          <Route />
        </Routes>
      </main>
    </div>
  )
}

export default App
