import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/pokemon-logo.png";

export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="flex min-w-full top-0 flex-wrap items-center justify-between px-2 py-3 bg-red-600 z-10">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          {<img src={Logo} className="mr-3 h-6 sm:h-9" alt="Pokemon Logo" />}

          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center font-pokesolid text-2xl uppercase font-bold leading-snug text-yellow-400 blueStroke rounded-lg"
                    : "px-3 py-2 flex items-center font-pokehollow text-xl uppercase font-bold leading-snug text-white blueStroke"
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Pokemon"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center font-pokesolid  text-2xl uppercase font-bold leading-snug text-yellow-400 blueStroke rounded-lg"
                    : "px-3 py-2 flex items-center font-pokehollow  text-xl uppercase font-bold leading-snug text-white blueStroke"
                }
                end
              >
                Pokémon
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to={"/Collection"}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 flex items-center font-pokesolid  text-2xl uppercase font-bold leading-snug text-yellow-400 blueStroke rounded-lg"
                    : "px-3 py-2 flex items-center font-pokehollow  text-xl uppercase font-bold leading-snug text-white blueStroke"
                }
                end
              >
                Colección
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
