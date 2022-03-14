import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'

function App() {
  const [count, setCount] = useState<number>(0);
  const [infor, setInfo] = useState<Product>({
    name: 'Tran Minh',
    age: 22
  });


  return (
    <div className="App">
      <ShowInfor person={infor} />
    </div>
  )
}

export default App
