import baby1 from "../assets/baby/baby1.jpg";
import baby2 from "../assets/baby/baby2.jpg";
import baby3 from "../assets/baby/baby3.jpg";
import baby4 from "../assets/baby/baby4.jpg";
import baby5 from "../assets/baby/baby5.jpg";
import baby6 from "../assets/baby/baby6.jpg";
import baby7 from "../assets/baby/baby7.jpg";
import baby8 from "../assets/baby/baby8.jpg";
import baby9 from "../assets/baby/baby9.jpg";
import Navbar from "./Navbar";
import AdvancedSlider from "./slider/AdvancedSlider";

const BabyPage = () => {
  const images = [
    baby1,
    baby2,
    baby3,
    baby4,
    baby5,
    baby6,
    baby7,
    baby8,
    baby9,
  ];
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Navbar />
      <AdvancedSlider images={images} />
    </div>
  );
};

export default BabyPage;
