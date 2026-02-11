import { Link } from "react-router-dom";
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
        <h1 className={`text-white font-bold transition-all ${scrolled ? "text-lg" : "text-xl"}`}>
          SIGERS
        </h1>

        <div className="flex gap-6 text-sm">
          <Link to="/" className="text-zinc-300 hover:text-white transition">Home</Link>
          <Link to="/gallery" className="text-zinc-300 hover:text-white transition">Foto Aib</Link>
          <Link to="/world-record" className="text-zinc-300 hover:text-white transition">World Record</Link>
          <Link to="/about" className="text-zinc-300 hover:text-white transition">About</Link>
          <Link to="/quotes" className="text-zinc-300 hover:text-white transition">Quotes</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
