import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import HomePage from "./pages/Home";
import NewIn from "./pages/NewIn";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import Cart from "./pages/Cart";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
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
