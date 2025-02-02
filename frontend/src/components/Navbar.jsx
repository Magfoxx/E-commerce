import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ containerStyles }) => {
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "/collection", title: "Collection" },
    { path: "/testimonials", title: "Testimonials" },
    { path: "/mailto:info@outfitery.com", title: "Contact" },
  ];

  return (
    <nav className={`${containerStyles}`}>
      {navLinks.map((link) => (
        <NavLink
          key={link.title}
          to={link.path}
          className={({ isActive }) =>
            `${isActive ? "active-link" : ""} px-3 py-2 rounded-full`
          }
        >
          <div className="flexCenter gap-x-1">
            {link.title}
          </div>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navbar;
