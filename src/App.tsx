import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./components/Layout/AppLayout";
import About from "./pages/About/about";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Category } from "./pages/Category";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
import { Checkout } from "./pages/CheckoutSuccess";
import { Products } from "./pages/Products";
function App() {
  return (
    <>
      <div className="w-full h-screen ">
        <Router>
          <Routes>
            <Route  element={<AppLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/category" element={<Category />} />
              <Route path="/single-product/:id" element={<SingleProduct />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products" element={<Products />} />
            </Route>
            <Route path="/header" element={< Header/>} />
            <Route path="/footer" element={< Footer/>} />
            <Route path="/login" element={< Login/>} />
            <Route path="/checkout" element={< Checkout/>} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
