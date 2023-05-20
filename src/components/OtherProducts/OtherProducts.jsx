import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles

const OtherProducts = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <div className="grid grid-cols-2">
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
  );
};

export default OtherProducts;
