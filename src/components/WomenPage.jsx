import women1 from "../assets/women/women1.jpg";
import women2 from "../assets/women/women2.jpg";
import women3 from "../assets/women/women3.jpg";
import women4 from "../assets/women/women4.jpg";
import women5 from "../assets/women/women5.jpg";
import women6 from "../assets/women/women6.jpg";
import women7 from "../assets/women/women7.jpg";
import women8 from "../assets/women/women8.jpg";
import women9 from "../assets/women/women9.jpg";
import women10 from "../assets/women/women10.jpg";
import women11 from "../assets/women/women11.jpg";
import women12 from "../assets/women/women12.jpg";
import women13 from "../assets/women/women13.jpg";
import AdvancedSlider from "./Slider/AdvancedSlider.jsx";
import Navbar from "./Navbar.jsx";
const WomenPage = () => {
  const images = [
    women1,
    women2,
    women3,
    women4,
    women5,
    women6,
    women7,
    women8,
    women9,
    women10,
    women11,
    women12,
    women13,
  ];
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Navbar />
      <AdvancedSlider images={images} />
    </div>
  );
};

export default WomenPage;
