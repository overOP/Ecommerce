import React from "react";
import Image1 from "../../assets/hero/women.png";
import Image2 from "../../assets/hero/shopping.png";
import Image3 from "../../assets/hero/sale.png";

import Slider from "react-slick";

const ImageList = [
  {
    id: 1,
    img: Image1,
    title: "Upto 50% off on all Men's Wear",
    description:
      "lorem His Life will forever be Changed dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    img: Image2,
    title: "30% off on all Women's Wear",
    description:
      "Who's there lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    img: Image3,
    title: "70% off on all Products Sale",
    description:
      "consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

//bg using npm package name "react-slick"
const Hero = ({ handleOrderPopup }) => {
  let settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseonHover: false,
    pauseonFocus: true,
  };
  return (
    <>
      <div className="relative flex min-h-[550px] items-center justify-center overflow-hidden bg-gray-100 duration-300 dark:bg-slate-950 dark:text-white sm:min-h-[650px]">
      {/* background pattern */}
        <div className="-z[8] absolute -top-1/2 right-0 h-[700px] w-[700px] rotate-45 rounded-3xl bg-primary/40"></div>
        {/* hero section */}
        <div className="container pb-8 sm:pb-0">
          <Slider {...settings}>
            {ImageList.map((data) => (
              <div className="grid grid-cols-1 sm:grid-cols-2">
              {/* text content section */}
                <div className="relative z-10 order-2 flex flex-col justify-center gap-4 pt-12 text-center sm:order-1 sm:pt-0 sm:text-left">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl font-bold sm:text-6xl lg:text-7xl"
                  >
                    {data.title}
                  </h1>
                  <p
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                    className="text-sm"
                  >
                    {data.description}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button
                      onClick={() => {
                        handleOrderPopup();
                      }}
                      className="rounded-full bg-gradient-to-r from-primary to-secondary px-4 py-2 text-white duration-200 hover:scale-105"
                    >
                      Order Now
                    </button>
                  </div>
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt="slider image"
                      className="lg:scale-120 mx-auto w-[300px] object-contain sm:h-[450px] sm:w-[450px] sm:scale-105"
                    />
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
