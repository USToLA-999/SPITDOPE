
import './App.css'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home/Home"
import AboutUs from './Pages/AboutUs/AboutUs'
import Merch from './Pages/Merch/Merch'
import TermsPage from './Pages/TermsCondition/TermsPage'
import Privacy from './Pages/Privacy/Privacy'
import Refund from './Pages/Refund/Refund'
import Cancellation from './Pages/Cancellation/Cancellation'
import ScrollToTop from './ScrollToTop'
import Cart from './Pages/Merch/Cart'
import AdminLogin from './Pages/Admin/AdminPage'
import AdminDashboard from './Pages/Admin/AdminDashboard'
import { CartProvider } from './context/CartContext'



function App() {


  return (
    <>
    <CartProvider>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/aboutus' element={<AboutUs />} />
        <Route path='/merch' element={<Merch />} />
        <Route path='/terms&condition' element={<TermsPage />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/refund' element={<Refund />} />
        <Route path='/cancellation' element={<Cancellation />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </CartProvider>
    </>
  )
}

export default App
