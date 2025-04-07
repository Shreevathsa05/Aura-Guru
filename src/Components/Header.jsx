import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="text-3xl font-bold flex items-start space-x-2">
  <NavLink to="/" className="flex items-center space-x-2">
    <img src="/pray.png" alt="logo" className="h-16 w-16" />
    <span>Aura</span>
  </NavLink>
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {["Home", "ApiDocs", "Show", "JsonConverter"].map((item) => (
              <NavLink
                key={item}
                to={`/${item === "Home" ? "" : item}`}
                className={({ isActive }) =>
                  `hover:text-gray-400 ${
                    isActive ? "text-orange-400 font-semibold" : ""
                  }`
                }
              >
                {item === "ApiDocs" ? "API Docs" : item}
              </NavLink>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2">
          {["Home", "ApiDocs", "Show", "JsonConverter"].map((item) => (
            <NavLink
              key={item}
              to={`/${item === "Home" ? "" : item}`}
              className={({ isActive }) =>
                `block px-4 py-2 hover:bg-gray-700 ${
                  isActive ? "text-orange-400 font-semibold" : ""
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item === "ApiDocs" ? "API Docs" : item}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Header;
