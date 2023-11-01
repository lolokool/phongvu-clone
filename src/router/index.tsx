import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import MyCart from "../pages/MyCart";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:canonical" element={<Detail />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
