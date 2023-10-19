import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Contact from "./Contact";
const Routecompo = () => {
  return (
    <div className="nav">
      <BrowserRouter>
        <div className="nav-block">
          <NavLink className="nonActiveNav" to={"/"}>
            Home
          </NavLink>
          <NavLink className="nonActiveNav" to={"/students"}>
            Student
          </NavLink>
          <NavLink className="nonActiveNav" to={"/contact"}>
            Contatct
          </NavLink>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students" element={<Student />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default Routecompo;
