import { Route, Routes } from "react-router-dom";
import "./App.scss";
import Header from "./components/Header";
import HomePage from "./pages/Home";
import NewIn from "./pages/NewIn";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Header />}>
          <Route index element={<HomePage />} />
          <Route path="/newIn" element={<NewIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
