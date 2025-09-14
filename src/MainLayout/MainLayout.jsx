import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "../components/Navbar/Navbar"
import Home from "../pages/Home/Home"
import Authenticator from "../pages/Auth/Authenticator"
import Login from "../pages/Auth/Login/Login"
import Register from "../pages/Auth/Register/Register"
import Error from "../pages/Error/Error"
import AuthCheck from "../pages/AuthCheck"
import Footer from "../components/Footer/Footer"
import Products from "../pages/Products/Products"
import GreenTea from "../pages/Products/GreenTea"
import HongTra from "../pages/Products/HongTra"
import OolongTea from "../pages/Products/OolongTea"
import WhiteTea from "../pages/Products/WhiteTea"
import About from "../pages/About/About"
import Detail from "../pages/Detail/Detail"
import ProductList from "../pages/Products/ProductList"
import CartTab from "../components/CartTab/CartTab"
import PaymentProcess from "../pages/PaymentProcess/PaymentProcess"
import Delivery from "../pages/Policy/Delivery"
import Privacy from "../pages/Policy/Privacy"
import Terms from "../pages/Policy/Terms"

function MainLayout() {
  return (
    <div>

        <BrowserRouter>
        {/* navbar */}
        <Navbar/>
        <Routes>
          <Route path="/" element={
             <AuthCheck>

               <Home/>
             </AuthCheck>
            }/>
            <Route path="home" element={<Home/>} />
            <Route path="about" element={<About/>} />

            <Route path='productlist/:slug' element={<Detail/>} />

            <Route path="productlist" element={<ProductList/>} />
            <Route path="products" element={<Products/>} />
              <Route path="greentea" element={<GreenTea/>}/>
              <Route path="hongtra" element={<HongTra/>}/>
              <Route path="oolongtea" element={<OolongTea/>}/>
              <Route path="whitetea" element={<WhiteTea/>}/>

            <Route path=':slug' element={<Detail/>} />
            <Route path="paymentprocess" element={<PaymentProcess/>} />

            <Route path="delivery" element={<Delivery />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />

          <Route path="auth" element={<Authenticator/>}>
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
          </Route>


          {/* no routes found */}
          <Route path="*" element={<Error/>} />
        </Routes>
        <CartTab/>
        <Footer/> 
        </BrowserRouter>



    </div>
  )
}

export default MainLayout