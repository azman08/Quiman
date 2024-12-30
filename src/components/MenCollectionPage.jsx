import MenContentCard from "./MenContentCard";
import { motion } from "framer-motion";
import Navbar from "./Navbar";

const MenCollectionPage = () => {
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
        <MenContentCard />
      </motion.div>
    </div>
  );
};

export default MenCollectionPage;
