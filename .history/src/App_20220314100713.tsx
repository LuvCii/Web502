import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfor from './components/ShowInfor.jsx'

function App() {
  const [count, setCount] = useState(0)
  const age = 22;
  const name = 'Dung';
  const person = 'Tran Minh';


  return (
    <div className="App">
      <ShowInfor person={person} name={name} age={age} />
    </div>
  )
}

export default App
