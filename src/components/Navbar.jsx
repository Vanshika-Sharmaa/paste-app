// components/Navbar.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-950 border-b border-purple-800 p-4 text-white shadow-md flex gap-6 justify-center">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `hover:underline text-lg ${isActive ? 'text-purple-400 font-semibold' : 'text-gray-300'}`
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/pastes"
        className={({ isActive }) =>
          `hover:underline text-lg ${isActive ? 'text-purple-400 font-semibold' : 'text-gray-300'}`
        }
      >
        Pastes
      </NavLink>
    </nav>
  );
};

export default Navbar;
