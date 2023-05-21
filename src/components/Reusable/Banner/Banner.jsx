// Required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";
import { useRef } from "react";

//Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Banner.css";

const swiperImages = [
  "https://i.ibb.co/3WxH8Q5/Pop-Zombie-Deadpool-hi-res.png",
  "https://i.ibb.co/dQ2N9mr/rocketbox.png",
  "https://i.ibb.co/xgbVmGr/khonshubox.png",
  "https://i.ibb.co/S6hsp6Q/harleybox.png",
  "https://i.ibb.co/3v0xGPh/mysteriobox.png",
  "https://i.ibb.co/v3w1Ngj/supergirlbox.png",
];

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      {/* Header tag for mobile devices */}
      <h1 className="lg:hidden text-5xl my-4 font-bold text-center text-black">
        Pop up your collection
        <br /> with our newly imported
        <br />
        Funko POPs!!
      </h1>
      {/* Swiper component functionalities*/}
      <Swiper
        centeredSlides={true}
        spaceBetween={30}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        loop={true}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper  bg-base-300 mt-3 rounded-lg"
      >
        {/* Swiper Slides */}
        {swiperImages.map((img, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <img src={img} alt="" />
              <div className="hidden lg:flex items-center text-center ">
                <h1 className="text-5xl font-bold text-black leading-relaxed">
                  Pop up your collection
                  <br /> with our{" "}
                  <span className="text-[#F5BB00]">exclusive</span>
                  <br />
                  Funko POPs!!
                </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}

        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
};

export default Banner;
