import React, { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Banner from "./Components/Banner/Banner";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import Products from "./Components/Products/Products";
import TopProducts from "./Components/TopProducts/TopProducts";
import Subscribe from "./Components/Subscribe/Subscribe";
import Testimonials from "./Components/Testimonials/Testimonials";
import Footer from "./Components/Footer/Footer";
import Popup from "./Components/Popup/Popup";

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);
  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    Aos.refresh();
  }, []);

  return (
    <>
      <div className=" bg-white duration-200 dark:bg-gray-900 dark:text-white">
      <Navbar handleOrderPopup={handleOrderPopup}/>
      <Hero handleOrderPopup={handleOrderPopup}/>
      <Products/>
      <TopProducts handleOrderPopup={handleOrderPopup}/>
        <Banner/>
        <Subscribe/>
        <Testimonials/>
        <Footer/>
        <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      </div>
    </>
  );
};

export default App;
