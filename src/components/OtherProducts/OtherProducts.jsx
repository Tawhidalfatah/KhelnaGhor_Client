import AOS from "aos";
import "aos/dist/aos.css";

const products = [
  {
    img: "https://i.ibb.co/r2JgFZv/Pocket-Pop-Tee-The-Apex-Predator-T-Rex-hi-res.png",
    name: "Apex Predator T-Shirt",
  },
  {
    img: "https://i.ibb.co/S6Wbkzw/Disney-Pixar-Toy-Story-Talent-Show-Board-Game-hi-res.png",
    name: "Toy Story Board Game",
  },
  {
    img: "https://i.ibb.co/s2v1Y6b/Darth-Vader-Mini-Backpack-hi-res.png",
    name: "Mini Vader Backpack",
  },
  {
    img: "https://i.ibb.co/fvhSHYt/Pop-Pin-Mojo-Jojo-hi-res.png",
    name: "Mojojo Pin",
  },
];

const OtherProducts = () => {
  AOS.init({
    duration: 1200,
  });
  return (
    <div className="my-32">
      <h1 className="text-center text-5xl my-10">
        We also have Merch and Games!!
      </h1>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 overflow-x-hidden overflow-y-hidden">
        {products.map((pd, index) => {
          return (
            <div className="border rounded-lg p-10 shadow-lg" key={index}>
              <img
                className="border rounded-lg bg-slate-100"
                data-aos="zoom-out"
                src={pd.img}
                alt=""
              />
              <h2 className="text-center text-3xl font-bold py-10">
                {pd.name}
              </h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OtherProducts;
