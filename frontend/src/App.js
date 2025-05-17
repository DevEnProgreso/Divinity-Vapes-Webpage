import "./App.css";
import { Navbar } from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Shop } from "./Pages/Shop";
import { ShopCategory } from "./Pages/ShopCategory";
import { Product } from "./Pages/Product";
import { Cart } from "./Pages/Cart";
import { LoginSignup } from "./Pages/LoginSignup";
import { Footer } from "../src/Components/Footer/Footer";
import disposable_Banner from "./Components/Assets/disposableBanner.png";
import eliquid_Banner from "./Components/Assets/eliquidBanner.png";
import vapeKit_Banner from "./Components/Assets/vapeKitBanner.png";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="/disposables"
            element={
              <ShopCategory banner={disposable_Banner} category="disposable" />
            }
          />
          <Route
            path="/eliquids"
            element={
              <ShopCategory banner={eliquid_Banner} category="eliquid" />
            }
          />
          <Route
            path="/vapekits"
            element={
              <ShopCategory banner={vapeKit_Banner} category="vapeskit" />
            }
          />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
