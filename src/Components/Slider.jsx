// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider1 from "../assets/slider1.jpg";
import slider2 from "../assets/slider2.jpg";
import slider3 from "../assets/slider3.jpg";

// Import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

export default function App() {
  return (
    <div className="w-full h-56 my-5  lg:h-[500px]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full rounded"
      >
        <SwiperSlide>
          <div
            className="h-full w-full   bg-cover bg-center flex items-center justify-center relative inset-0 opacity-70"
            style={{ backgroundImage: `url(${slider1})` }}
          >
            <div className="absolute inset-0 bg-opacity-70 "></div>
            <div className="text-center text-white flex flex-col justify-center items-center gap-3 ">
              <h2 className="text-3xl font-semibold ">Unbeatable Prices</h2>
              <p>Quality Equipment at Competitive Rates</p>
              <button
                className="btn text-white w-[120px] h-[40px] bg-gradient-to-r from-blue-600 to-purple-600
"
              >
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center relative inset-0 opacity-70"
            style={{ backgroundImage: `url(${slider2})` }}
          >
            <div className="absolute inset-0  bg-opacity-70"></div>
            <div className="text-center text-white flex flex-col justify-center items-center gap-3 ">
              <h2 className="text-3xl font-semibold ">
                Premium Sports Equipment
              </h2>
              <p>Elevate Your Game with Professional Gear</p>
              <button
                className="btn text-white w-[120px] h-[40px] bg-gradient-to-r from-blue-600 to-purple-600
"
              >
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div
            className="h-full w-full bg-cover bg-center flex items-center justify-center relative  inset-0 opacity-70"
            style={{ backgroundImage: `url(${slider3})` }}
          >
            <div className="absolute inset-0 bg-opacity-70"></div>
            <div className="text-center text-white flex flex-col justify-center items-center gap-3 ">
              <h2 className="text-3xl font-semibold ">Train Like a Champion</h2>
              <p>Professional Equipment for Every Athlete</p>
              <button
                className="btn text-white w-[120px] h-[40px] bg-gradient-to-r from-blue-600 to-purple-600
"
              >
                Explore
              </button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
