import "./Sidebar.css";

import { NavLink } from "react-router-dom";
import React from "react";

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <h2>Navigation</h2>

      <nav>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
