import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import Favorite from "./pages/Favorite";
import HomePage from "./pages/Home";
import NewIn from "./pages/NewIn";
import Product from "./pages/Product";
import ShopBag from "./pages/ShopBag";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/newIn" element={<NewIn />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/bag" element={<ShopBag />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
