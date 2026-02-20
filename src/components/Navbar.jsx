import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItemClass = ({ isActive }) =>
    `transition relative ${
      isActive
        ? "text-white font-semibold"
        : "text-zinc-300 hover:text-white"
    }`;

  return (
    <nav
      className={`
        fixed top-0 left-0 w-full z-50
        backdrop-blur-md bg-black/40
        transition-all duration-300
        ${scrolled ? "py-3" : "py-6"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <h1
          className={`text-white font-bold transition-all ${
            scrolled ? "text-lg" : "text-xl"
          }`}
        >
          SIGERS
        </h1>

        <div className="flex gap-6 text-sm">
          <NavLink to="/" end className={navItemClass}>
            Home
          </NavLink>
          <NavLink to="/gallery" className={navItemClass}>
            Foto Aib
          </NavLink>
          <NavLink to="/world-record" className={navItemClass}>
            World Record
          </NavLink>
          <NavLink to="/about" className={navItemClass}>
            About
          </NavLink>
          <NavLink to="/quotes" className={navItemClass}>
            Quotes
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
