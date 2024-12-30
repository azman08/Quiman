import kid1 from "../assets/kids/kids1.jpg";
import kid2 from "../assets/kids/kids2.jpg";
import kid3 from "../assets/kids/kids3.jpg";
import kid4 from "../assets/kids/kids4.jpg";
import kid5 from "../assets/kids/kids5.jpg";
import kid6 from "../assets/kids/kids6.jpg";
import kid7 from "../assets/kids/kids7.jpg";
import kid8 from "../assets/kids/kids8.jpg";
import kid9 from "../assets/kids/kids9.jpg";
import kid10 from "../assets/kids/kids10.jpg";
import kid11 from "../assets/kids/kids11.jpg";
import kid12 from "../assets/kids/kids12.jpg";
import AdvancedSlider from "./Slider/AdvancedSlider.jsx";
import Navbar from "./Navbar";

const KidsPage = () => {
  const images = [
    kid1,
    kid2,
    kid3,
    kid4,
    kid5,
    kid6,
    kid7,
    kid8,
    kid9,
    kid10,
    kid11,
    kid12,
  ];
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Navbar />
      <AdvancedSlider images={images} />
    </div>
  );
};

export default KidsPage;
