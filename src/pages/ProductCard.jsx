import { Link } from "react-router-dom";

const ProductCard = ({
  image,
  colors,
  category,
  size,
  name,
  price,
  rating,
  inStock,
  link,
}) => {
  return (
    <Link
      to={link}
      className="relative w-full h-auto bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-100"
    >
      {/* Image */}
      <img
        src={image}
        alt={name}
        className="w-full lg:h-[490px] sm:h-[400px] object-contain"
      />
      {/* Colors & Wishlist */}
      <div className="flex items-center justify-between px-4 py-3">
        {/* Color Palette */}
        <div className="flex space-x-2">
          {colors.map((color, index) => (
            <span
              key={index}
              className="w-6 h-6 rounded-full border border-gray-200"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        {/* Wishlist */}
        <button aria-label="Add to Wishlist" className="">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.99994 17.47L1.68894 9.97C0.656938 8.938 0.0859375 7.594 0.0859375 6.192C0.0859375 3.088 2.43894 0.748001 5.55994 0.748001C7.01794 0.748001 8.23494 1.532 8.99994 2.192C9.76594 1.532 10.9829 0.748001 12.4409 0.748001C15.5609 0.748001 17.9139 3.089 17.9139 6.192C17.9139 7.594 17.3429 8.938 16.3059 9.975L8.99994 17.47ZM5.55994 1.947C3.12294 1.947 1.28694 3.772 1.28694 6.192C1.28694 7.274 1.73294 8.316 2.54394 9.128L9.00094 15.752L15.4529 9.133C16.2689 8.318 16.7149 7.275 16.7149 6.193C16.7149 3.773 14.8779 1.948 12.4419 1.948C11.1079 1.948 9.97994 2.88 9.42594 3.435L9.00094 3.861L8.57594 3.435C8.02194 2.879 6.89494 1.947 5.55994 1.947Z"
              fill="black"
            ></path>
          </svg>
        </button>
      </div>

      {/* Details */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          {/* Category */}
          <p className="text-sm italic text-gray-500 mb-1">{category}</p>
          {/* Size */}
          <p className="text-sm italic text-gray-500 float-right ">{size}</p>
        </div>

        {/* Name */}
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
        {/* Price */}
        <p className="text-lg font-bold mb-2">Rs. {price}</p>
        {/* Rating */}
        <div className="flex items-center">
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
          >
            <g
              id="5.-Iconography"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Iconography"
                transform="translate(-88.000000, -1419.000000)"
                fill="#000000"
              >
                <g id="Row-13" transform="translate(60.000000, 1403.000000)">
                  <g id=".">
                    <g
                      id="Icons/Star/Filled"
                      transform="translate(28.000000, 16.000000)"
                    >
                      <g id="Rating">
                        <g id="Stars">
                          <polygon
                            id="Full-Star"
                            points="4.52727273 24 7.34181818 14.9345455 0 9.21818182 9.12 9.21818182 12.0109091 0 14.88 9.21818182 24 9.21818182 16.68 14.9345455 19.4727273 24 12.0109091 18.3927273"
                          ></polygon>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>{" "}
          <p className="text-sm font-bold">{rating}</p>
          <p className="text-sm  text-gray-700 ml-2">({inStock})</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
