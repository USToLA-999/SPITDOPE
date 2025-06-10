

import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'
import Merch from './Pages/Merch/Merch'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/merch' element={<Merch />} />
    </Routes>
  )
}

export default App
