import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppLayout from "./Layout/AppLayout";
import About from "./pages/About";
import { Home } from "./pages/Home";
import { Category } from "./pages/Category";
import { CategoryItems } from "./pages/ItemsInCategory";
import { SingleProduct } from "./pages/SingleProduct";
import { Cart } from "./pages/Cart";
// import { Products } from "./pages/Products";
import { Login } from "./pages/Login";
import { Checkout } from "./pages/CheckoutSuccess";
import { lazy, Suspense } from "react";

const Products = lazy(() => import("./pages/Products"));

function App() {
  return (
    <>
      <div className="w-full h-screen">
        <Router>
          {/* Add Suspense for loading state */}
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route element={<AppLayout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/categories" element={<Category />} />
                <Route path="/items" element={<CategoryItems />} />
                <Route path="/single-product/:id" element={<SingleProduct />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/products" element={<Products />} />
              </Route>
              {/* <Route path="/header" element={<Header />} />
              <Route path="/footer" element={<Footer />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </Suspense>
        </Router>
      </div>
    </>
  );
}

export default App;
