import ItemCard from "./ItemCard";
import { Link } from "react-router-dom";
import kid1 from "../assets/kidCard/kid1.avif";
import kid2 from "../assets/kidCard/kid2.avif";
import kid3 from "../assets/kidCard/kid3.avif";
import kid4 from "../assets/kidCard/kid4.avif";
import kid5 from "../assets/kidCard/kid5.avif";
import kid6 from "../assets/kidCard/kid6.avif";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const KidContentCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const kidCardData = [
    {
      src: kid1,
      label: "Outwear",
      link: "/search/kids/outwear",
    },
    {
      src: kid2,
      label: "T-shirts & Sweat & Fleece",
      link: "/search/kids/tshirt",
    },
    {
      src: kid3,
      label: "Bottoms",
      link: "/search/kids/bottoms",
    },
    {
      src: kid4,
      label: "Dresses & Skirts",
      link: "/search/kids/skirts",
    },
    {
      src: kid5,
      label: "Innerwear",
      link: "/search/kids/innerwear",
    },
    {
      src: kid6,
      label: "Fleece",
      link: "/search/kids/fleece",
    },
  ];
  const filteredData = kidCardData.filter((card) =>
    card.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm(""); // Clear the search term
  };
  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
      <div className="grid grid-cols-3 gap-16">
        {filteredData.map((card, index) => (
          <Link to={card.link} key={index}>
            <ItemCard src={card.src} label={card.label} />
          </Link>
        ))}
      </div>
      {/* Search */}
      <div className="flex items-center mt-24 border-gray-400 border-2 w-[850px] h-12 rounded-full">
        <div>
          <svg
            width="24"
            height="24"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`mx-4 text-gray-500 cursor-pointer ${
              searchTerm ? "hidden" : "block"
            }`} // Hide the icon when typing
          >
            <path
              d="M27.8276 28.5752L21.7378 22.4863C19.979 23.9619 17.7129 24.8516 15.2427 24.8516C9.66309 24.8516 5.12402 20.3125 5.12402 14.7334C5.12402 9.1543 9.66309 4.61523 15.2427 4.61523C20.8223 4.61523 25.3613 9.1543 25.3613 14.7334C25.3613 17.124 24.5283 19.3232 23.1367 21.0566L29.2417 27.1611L27.8276 28.5752ZM15.2427 6.61523C10.7661 6.61523 7.12402 10.2568 7.12402 14.7334C7.12402 19.21 10.7661 22.8516 15.2427 22.8516C19.7192 22.8516 23.3613 19.21 23.3613 14.7334C23.3613 10.2568 19.7192 6.61523 15.2427 6.61523Z"
              fill="#767676"
            />
          </svg>
        </div>
        <input
          type="text"
          placeholder="Search by keyword"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow h-full px-4 rounded-full outline-none"
        />
        {searchTerm && (
          <MdClose
            onClick={clearSearch}
            className="mx-4 text-gray-500 cursor-pointer"
            size={24}
          />
        )}
      </div>
    </div>
  );
};

export default KidContentCard;
