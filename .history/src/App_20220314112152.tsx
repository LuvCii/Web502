import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';
import type { Product } from './types/product'

function App() {
  const [count, setCount] = useState<number>(0);
  const [info, setInfo] = useState<Product>({
    name: 'Tran Minh',
    age: 22
  });


  return (
    <div className="App">
      {count} <button onClick={() => setCount(count + 1)}>Click</button>
      <ShowInfor person={info} />
    </div>
  )
}

export default App
