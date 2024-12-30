import KidContentCard from "./KidContentCard";
import { motion } from "framer-motion";
import Navbar from "./Navbar";
const KidCollectionPage = () => {
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
        <KidContentCard />
      </motion.div>{" "}
    </div>
  );
};

export default KidCollectionPage;
