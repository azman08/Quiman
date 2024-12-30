import Navbar from "../../components/Navbar";
import ProductCard from "../ProductCard";
import MenSweatersData from "../menData/MenSweatersData";

const MenSweaters = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen p-8 mt-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Men's Outwear</h1>
        {Object.keys(MenSweatersData).map((section, index) => (
          <div key={index} className="mb-12">
            {/* Section Title */}
            <h2 className="text-center text-2xl font-bold m-10">{section}</h2>

            {/* Cards Grid */}
            <div className="grid gap-3 grid-cols-4">
              {MenSweatersData[section].map((product, idx) => (
                <ProductCard
                  key={idx}
                  image={product.image}
                  colors={product.colors}
                  category={product.category}
                  size={product.size}
                  name={product.name}
                  price={product.price}
                  rating={product.rating}
                  inStock={product.inStock}
                  link={product.link}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MenSweaters;
