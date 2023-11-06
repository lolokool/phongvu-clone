import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Detail from "../pages/detail";
import MyCart from "../pages/MyCart";
import Register from "../pages/Login";

const PublicRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:canonical" element={<Detail />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/login" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default PublicRoutes;
