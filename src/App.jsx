
import './App.css'
import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'
import Merch from './Pages/Merch/Merch'
import TermsPage from './Pages/TermsCondition/TermsPage'
import Privacy from './Pages/Privacy/Privacy'
import Refund from './Pages/Refund/Refund'
import Cancellation from './Pages/Cancellation/Cancellation'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/aboutus' element={<AboutUs />} />
      <Route path='/merch' element={<Merch />} />
      <Route path='/terms&condition' element={<TermsPage />} />
      <Route path='/privacy' element={<Privacy />} />
      <Route path='/refund' element={<Refund />} />
      <Route path='/cancellation' element={<Cancellation />} />
    </Routes>
  )
}

export default App
