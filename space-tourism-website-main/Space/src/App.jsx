import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import {Routes,Route  } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Screens/Home/Home'
import Crew from './Screens/Crew/Crew'
import Destination from './Screens/Destination/Destination'
import Technology from './Screens/Technology/Technology'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className="App">
      

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
      
      
      

    </div>
  )
}

export default App
