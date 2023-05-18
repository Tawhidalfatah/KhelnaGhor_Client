import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Navigation } from "swiper";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper bg-gray-400 mt-3 rounded-lg"
      >
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/VwM9NRg/deadpool.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/VwM9NRg/deadpool.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/VwM9NRg/deadpool.png" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src="https://i.ibb.co/VwM9NRg/deadpool.png" alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
