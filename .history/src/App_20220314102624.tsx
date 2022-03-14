import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ShowInfor from './components/ShowInfor';

function App() {
  const [count, setCount] = useState<number>(0)
  const person = {
    name: 'Tran Minh',
    age: 22
  }


  return (
    <div className="App">
      <ShowInfor person={person} name={name} age={age} />
    </div>
  )
}

export default App
