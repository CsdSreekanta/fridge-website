import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const navbar = () => {
  return (
    <div className="nav bg-blue-600 p-4 shadow-lg">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Home
      </NavLink>
      <NavLink
        to="/review"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
      Review
      </NavLink>
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Dashboard
      </NavLink>
      <NavLink
        to="/blogs"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
        Blogs
      </NavLink>
      <NavLink
        to="/About"
        className={({ isActive }) => (isActive ? "active" : "inactive")}
      >
       About
      </NavLink>
    
    </div>
  );
};

export default navbar;
