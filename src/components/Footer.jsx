import { IoMdHome } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { useState } from "react";
import { X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();

  const handleToggleSearch = () => {
    setIsActive(!isActive);
    if (!isActive) {
      navigate("/search/women");
    }
  };

  return (
    <div className="fixed bottom-4 inset-x-0 flex items-center justify-center p-4 gap-[50px] w-full h-[80px] bg-transparent z-20">
      {/* Home Icon */}
      <div className="bg-white flex items-center justify-center h-[60px] w-[60px] rounded-full shadow-lg cursor-pointer">
        <Link to={"/"}>
          <IoMdHome size={30} />
        </Link>
      </div>

      {/* Search Icon */}
      <div
        className={`flex items-center justify-center h-[80px] w-[80px] rounded-full shadow-lg cursor-pointer ${
          isActive ? "bg-black text-white" : "bg-white text-black"
        }`}
        onClick={handleToggleSearch}
      >
        {isActive ? (
          <X size={40} onClick={() => navigate("/")} />
        ) : (
          <IoIosSearch size={40} />
        )}
      </div>

      {/* User Icon */}
      <div className="bg-white flex items-center justify-center h-[60px] w-[60px] rounded-full shadow-lg cursor-pointer">
        <FaUser size={30} />
      </div>
    </div>
  );
};

export default Footer;
