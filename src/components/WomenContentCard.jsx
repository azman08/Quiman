import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import card1 from "../assets/card/card1.avif";
import card2 from "../assets/card/card2.avif";
import card3 from "../assets/card/card3.avif";
import card4 from "../assets/card/card4.avif";
import card5 from "../assets/card/card5.avif";
import card6 from "../assets/card/card6.avif";
import { MdClose } from "react-icons/md";
import { useState } from "react";

const WomenContentCard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cardData = [
    {
      src: card1,
      label: "Outwear",
      link: "/search/women/outwear",
    },
    {
      src: card2,
      label: "Sweaters",
      link: "/search/women/sweaters",
    },
    {
      src: card3,
      label: "Shirts and Blouses",
      link: "/search/women/shirts",
    },
    {
      src: card4,
      label: "InnerWear",
      link: "/search/women/innerwear",
    },
    {
      src: card5,
      label: "Accessories",
      link: "/search/women/accessories",
    },
    {
      src: card6,
      label: "Longewear",
      link: "/search/women/longewear",
    },
  ];

  const filteredData = cardData.filter((card) =>
    card.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <div className="flex items-center min-h-screen justify-center flex-col">
      <div className="grid grid-cols-3 gap-12">
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
            }`}
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

export default WomenContentCard;
