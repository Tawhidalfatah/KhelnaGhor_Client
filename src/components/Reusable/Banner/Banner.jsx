import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Banner.css";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";
import { useRef } from "react";

const Banner = () => {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
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
        <SwiperSlide>
          <div className="flex justify-center gap-2">
            <img
              src="https://i.ibb.co/3WxH8Q5/Pop-Zombie-Deadpool-hi-res.png"
              alt=""
            />
            <div className="flex items-center text-center ">
              <h1 className="text-5xl text-black leading-relaxed">
                Pop up your collection
                <br /> with our newly imported
                <br />
                Funko POPs!!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2">
            <img
              src="https://i.ibb.co/3WxH8Q5/Pop-Zombie-Deadpool-hi-res.png"
              alt=""
            />
            <div className="flex items-center text-center ">
              <h1 className="text-5xl text-black leading-relaxed">
                Pop up your collection
                <br /> with our newly imported
                <br />
                Funko POPs!!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2">
            <img
              src="https://i.ibb.co/3WxH8Q5/Pop-Zombie-Deadpool-hi-res.png"
              alt=""
            />
            <div className="flex items-center text-center ">
              <h1 className="text-5xl text-black leading-relaxed">
                Pop up your collection
                <br /> with our newly imported
                <br />
                Funko POPs!!
              </h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex justify-center gap-2">
            <img
              src="https://i.ibb.co/3WxH8Q5/Pop-Zombie-Deadpool-hi-res.png"
              alt=""
            />
            <div className="flex items-center text-center ">
              <h1 className="text-5xl text-black leading-relaxed">
                Pop up your collection
                <br /> with our newly imported
                <br />
                Funko POPs!!
              </h1>
            </div>
          </div>
        </SwiperSlide>
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
