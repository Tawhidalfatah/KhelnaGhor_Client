import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const OtherProducts = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <>
      <h1 className="text-center text-5xl mt-10">
        We have also other merchendise!!!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-x-hidden overflow-y-hidden">
        <img
          data-aos="zoom-out"
          src="https://i.ibb.co/r2JgFZv/Pocket-Pop-Tee-The-Apex-Predator-T-Rex-hi-res.png"
          alt=""
        />
        <img
          data-aos="zoom-out"
          src="https://i.ibb.co/r2JgFZv/Pocket-Pop-Tee-The-Apex-Predator-T-Rex-hi-res.png"
          alt=""
        />
        <img
          data-aos="zoom-out"
          src="https://i.ibb.co/r2JgFZv/Pocket-Pop-Tee-The-Apex-Predator-T-Rex-hi-res.png"
          alt=""
        />
        <img
          data-aos="zoom-out"
          src="https://i.ibb.co/r2JgFZv/Pocket-Pop-Tee-The-Apex-Predator-T-Rex-hi-res.png"
          alt=""
        />
      </div>
    </>
  );
};

export default OtherProducts;
