import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Mobiles from "./components/Mobiles";
import MobileDetail from "./components/MobileDetail";
import Laptops from "./components/Laptops";
import LaptopDetail from "./components/LaptopDetail";
import Headsets from "./components/Headsets";
import HeadsetDetail from "./components/HeadsetDetail";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Aboutus from "./components/Aboutus";
import Contactus from "./components/Contactus";
import PageNotFound from "./components/PageNotFound";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/mobiles/:id" element={<MobileDetail />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
        <Route path="/headsets" element={<Headsets />} />
        <Route path="/headsets/:id" element={<HeadsetDetail />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
