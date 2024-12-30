import { Link, useLocation } from "react-router-dom";
import { IoIosGlobe } from "react-icons/io";
import { useEffect, useState } from "react";
import logo from "../assets/website/logo.png";
import { X, Menu } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleToggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const isSearchRoute = location.pathname.startsWith("/search");
  const navTextColor = isSearchRoute ? "text-black" : "text-white";
  const underlineColor = isSearchRoute ? "bg-black" : "bg-white";

  return (
    <nav className="absolute top-0 left-0 w-full bg-transparent z-20 flex items-center justify-between p-4 h-[70px] max-w-screen-2xl">
      {/* Logo */}
      <div>
        <Link to="/">
          <img
            src={logo}
            alt="Logo"
            className="hidden md:flex items-center pl-6 h-[135px] w-auto"
          />
        </Link>
        {/* Hamburger Menu */}
        <button
          onClick={handleToggleOpen}
          className={`block md:hidden ${navTextColor}`}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute h-full top-[300px] left-0 w-full bg-transparent flex justify-center items-center lg:hidden md:hidden">
            <ul
              className={`flex flex-col ${navTextColor} items-center p-6 gap-14 font-bold text-base`}
            >
              {["women", "men", "kids", "baby"].map((category) => (
                <Link to={`/search/${category}`} key={category}>
                  <li className="cursor-pointer uppercase">{category}</li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Desktop Menu - Render even for "/search" routes */}
      <ul
        className={`hidden md:flex items-center gap-[60px] ${navTextColor} font-bold`}
        style={{
          fontFamily: "UniqloPro Regular, sans-serif",
        }}
      >
        {["women", "men", "kids", "baby"].map((category) => (
          <Link to={`/search/${category}`} key={category}>
            <li
              className={`relative group ${
                activeLink === `/search/${category}` ? "font-bold" : ""
              }`}
              onClick={() => setActiveLink(`/search/${category}`)}
            >
              {category.toUpperCase()}
              <span
                className={`absolute left-0 -bottom-[8px] w-full h-[1px] ${underlineColor} transition-all duration-300 ${
                  activeLink === `/search/${category}` ? "block" : "hidden"
                }`}
              ></span>
            </li>
          </Link>
        ))}
      </ul>

      {/* Right Icons */}
      <div className={`flex items-center gap-6 pr-6 ${navTextColor}`}>
        <div className="hover:text-gray-500 transition">
          <IoIosGlobe size={20} />
        </div>
        <div className="hover:text-gray-500 transition">
          {/* Example icon */}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              d="M12 20.47L4.689 12.97C3.657 11.938 3.086 10.594 3.086 9.19205C3.086 6.08805 5.439 3.74805 8.56 3.74805C10.018 3.74805 11.235 4.53205 12 5.19205C12.766 4.53205 13.983 3.74805 15.441 3.74805C18.561 3.74805 20.914 6.08905 20.914 9.19205C20.914 10.594 20.343 11.938 19.306 12.975L12 20.47ZM8.56 4.94705C6.123 4.94705 4.287 6.77205 4.287 9.19205C4.287 10.274 4.733 11.316 5.544 12.128L12.001 18.752L18.453 12.133C19.269 11.318 19.715 10.275 19.715 9.19305C19.715 6.77305 17.878 4.94805 15.442 4.94805C14.108 4.94805 12.98 5.88005 12.426 6.43505L12.001 6.86105L11.576 6.43505C11.022 5.87905 9.895 4.94705 8.56 4.94705Z"
            />
          </svg>
        </div>
        <div className="hover:text-gray-500">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            focusable="false"
            role="presentation"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.04381 6.56598L7.03981 3.50598H2.00781V4.70498H5.84181L5.85581 15.459H18.7528L20.9928 6.56498L7.04381 6.56598ZM17.8178 14.26H7.05481L7.04681 7.76498H19.4538L17.8188 14.26H17.8178ZM16.9688 20.502C17.7972 20.502 18.4688 19.8304 18.4688 19.002C18.4688 18.1736 17.7972 17.502 16.9688 17.502C16.1403 17.502 15.4688 18.1736 15.4688 19.002C15.4688 19.8304 16.1403 20.502 16.9688 20.502ZM8.95312 19.002C8.95312 19.8304 8.28155 20.502 7.45312 20.502C6.6247 20.502 5.95312 19.8304 5.95312 19.002C5.95312 18.1736 6.6247 17.502 7.45312 17.502C8.28155 17.502 8.95312 18.1736 8.95312 19.002Z"
            />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
