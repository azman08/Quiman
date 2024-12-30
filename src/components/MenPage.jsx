import men1 from "../assets/men/men1.jpg";
import men2 from "../assets/men/men2.jpg";
import men3 from "../assets/men/men3.jpg";
import men4 from "../assets/men/men4.jpg";
import men5 from "../assets/men/men5.jpg";
import men6 from "../assets/men/men6.jpg";
import men7 from "../assets/men/men7.jpg";
import men8 from "../assets/men/men8.jpg";
import men9 from "../assets/men/men9.jpg";
import men10 from "../assets/men/men10.jpg";
import men11 from "../assets/men/men11.jpg";
import men12 from "../assets/men/men12.jpg";
import men13 from "../assets/men/men13.jpg";
import Navbar from "./Navbar";
import AdvancedSlider from "./slider/AdvancedSlider";
import Footer from "./Footer";
const MenPage = () => {
  const images = [
    men1,
    men2,
    men3,
    men4,
    men5,
    men6,
    men7,
    men8,
    men9,
    men10,
    men11,
    men12,
    men13,
  ];
  return (
    <div className="h-screen w-screen overflow-hidden relative">
      <Navbar />
      <AdvancedSlider images={images} />
    </div>
  );
};

export default MenPage;
