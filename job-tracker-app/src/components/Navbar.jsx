import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink className="navbar__link" to="/" end>
        Dashboard
      </NavLink>
      <NavLink className="navbar__link" to="/jobs">
        Job Board
      </NavLink>
    </nav>
  );
}
