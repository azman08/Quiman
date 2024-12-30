import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WomenPage from "./components/WomenPage";
import MenPage from "./components/MenPage";
import KidsPage from "./components/KidsPage";
import BabyPage from "./components/BabyPage";
import CollectionPage from "./components/WomenCollectionPage";
import Footer from "./components/Footer";
import MenCollectionPage from "./components/MenCollectionPage";
import KidCollectionPage from "./components/KidCollectionPage";
import BabyCollectionPage from "./components/BabyCollectionPage";
import WomenOutwearPage from "./pages/women/WomenOutwearPage";
import WomenSweaterPage from "./pages/women/WomenSweaterPage";
import WomenAccessoriesPage from "./pages/women/WomenAccessories";
import WomenInnerwearPage from "./pages/women/WomenInnerwear";
import WomenLoungewearPage from "./pages/women/WomenLongewearPage";
import WomenShirtPage from "./pages/women/WomenShirtPage";
import MenAccessories from "./pages/men/MenAccessories";
import MenBottom from "./pages/men/MenBottom";
import MenFleece from "./pages/men/MenFleece";
import MenOutwear from "./pages/men/MenOutwear";
import MenShirts from "./pages/men/MenShirts";
import MenSweaters from "./pages/men/MenSweaters";
import MenTshirts from "./pages/men/MenTshirts";
import KidsOutwear from "./pages/kids/KidsOutwear";
import KidsBottom from "./pages/kids/KidsBottom";
import KidsTshirt from "./pages/kids/KidsTshirt";
import KidsFleece from "./pages/kids/KidsFleece";
import KidsInnerwear from "./pages/kids/KidsInnerwear";
import KidsShirt from "./pages/kids/KidsShirt";
import BabyInnerwear from "./pages/baby/BabyInnerwear";
import BabyOutwear from "./pages/baby/BabyOutwear";
import BabyPajama from "./pages/baby/BabyPajama";
import BabyPants from "./pages/baby/BabyPants";
import BabySocks from "./pages/baby/BabySocks";
import BabyTops from "./pages/baby/BabyTops";
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<WomenPage />} />
          <Route path="/women" element={<WomenPage />} />
          <Route path="/men" element={<MenPage />} />
          <Route path="/kids" element={<KidsPage />} />
          <Route path="/baby" element={<BabyPage />} />
          <Route path="/search/women" element={<CollectionPage />} />
          <Route path="/search/men" element={<MenCollectionPage />} />
          <Route path="/search/kids" element={<KidCollectionPage />} />
          <Route path="/search/baby" element={<BabyCollectionPage />} />
          <Route path="/search/women/outwear" element={<WomenOutwearPage />} />
          <Route path="/search/women/sweaters" element={<WomenSweaterPage />} />
          <Route
            path="/search/women/accessories"
            element={<WomenAccessoriesPage />}
          />
          <Route
            path="/search/women/innerwear"
            element={<WomenInnerwearPage />}
          />
          <Route
            path="/search/women/longewear"
            element={<WomenLoungewearPage />}
          />
          <Route path="/search/women/shirts" element={<WomenShirtPage />} />
          <Route path="/search/men/accessories" element={<MenAccessories />} />
          <Route path="/search/men/bottoms" element={<MenBottom />} />
          <Route path="/search/men/fleece" element={<MenFleece />} />
          <Route path="/search/men/outwear" element={<MenOutwear />} />
          <Route path="/search/men/shirts" element={<MenShirts />} />
          <Route path="/search/men/sweaters" element={<MenSweaters />} />
          <Route path="/search/men/tshirts" element={<MenTshirts />} />
          <Route path="/search/kids/outwear" element={<KidsOutwear />} />
          <Route path="/search/kids/bottoms" element={<KidsBottom />} />
          <Route path="/search/kids/tshirt" element={<KidsTshirt />} />
          <Route path="/search/kids/fleece" element={<KidsFleece />} />
          <Route path="/search/kids/innerwear" element={<KidsInnerwear />} />
          <Route path="/search/kids/skirts" element={<KidsShirt />} />
          <Route path="/search/baby/innerwear" element={<BabyInnerwear />} />
          <Route path="/search/baby/innerwear" element={<BabyInnerwear />} />
          <Route path="/search/baby/outwear" element={<BabyOutwear />} />
          <Route path="/search/baby/pajama" element={<BabyPajama />} />
          <Route path="/search/baby/pants" element={<BabyPants />} />
          <Route path="/search/baby/socks" element={<BabySocks />} />
          <Route path="/search/baby/tops" element={<BabyTops />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
