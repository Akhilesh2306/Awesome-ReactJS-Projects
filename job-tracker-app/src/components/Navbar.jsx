import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" end>
        Dashboard
      </NavLink>
      <NavLink to="/jobs">Job Board</NavLink>
    </nav>
  );
}
