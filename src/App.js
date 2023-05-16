import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import Home from "./pages/home/Home";
import NewIn from "./pages/newIn/NewIn";
import NotFound from "./pages/NotFound";
import Product from "./pages/product/Product";
import Cart from "./pages/cart/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/newIn" element={<NewIn />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
