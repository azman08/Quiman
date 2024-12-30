import Navbar from "./Navbar";
import WomenContentCard from "./WomenContentCard";
import { motion } from "framer-motion";
const WomenCollectionPage = () => {
  return (
    <div>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.1,
          duration: 1.7,
          ease: "easeInOut",
        }}
        viewport={{
          once: true,
        }}
      >
        <WomenContentCard />
      </motion.div>
    </div>
  );
};

export default WomenCollectionPage;
