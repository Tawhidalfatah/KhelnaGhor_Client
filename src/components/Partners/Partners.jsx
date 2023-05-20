import Marquee from "react-fast-marquee";

const Partners = () => {
  const imgSources = [
    "https://i.ibb.co/9cKDbWm/wb.png",

    "https://i.ibb.co/9pSh7SX/Marvel-logo-red.png",

    "https://i.ibb.co/qkJYDmr/lucas.png",

    "https://i.ibb.co/8z8h2Xb/dc.png",

    "https://i.ibb.co/1TVJXG4/disney.png",
  ];
  return (
    <>
      <h2 className="text-center text-5xl my-10">Our Partners</h2>
      <div className="flex flex-col lg:flex-row items-center justify-around py-16">
        {imgSources.map((img, index) => (
          <img key={index} src={img} width="200" height="200"></img>
        ))}
      </div>
    </>
  );
};

export default Partners;
