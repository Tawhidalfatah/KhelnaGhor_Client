import Marquee from "react-fast-marquee";

const imgSources = [
  "https://i.ibb.co/rQbvcZP/logan.png",

  "https://i.ibb.co/mbmhV2n/batman.png",

  "https://i.ibb.co/gSdXJRC/aquaman.png",

  "https://i.ibb.co/dKrcc25/wonderwoman.png",

  "https://i.ibb.co/sj4Ysvp/wonderwhite.png",

  "https://i.ibb.co/Kh8p1FG/thanos.png",

  "https://i.ibb.co/FnQY8Dx/superman.png",

  "https://i.ibb.co/vLxN27Q/groot.png",

  "https://i.ibb.co/gwJjwYk/strange.png",

  "https://i.ibb.co/4pTyWj1/gamora.png",

  "https://i.ibb.co/4sDSpBJ/gwen.png",

  "https://i.ibb.co/LSgRz0v/drax.png",
];

const Gallery = () => {
  return (
    <div className="">
      <h1 className="text-center text-3xl lg:text-6xl my-10">
        Meet your favourite superheroes!!
      </h1>
      <Marquee style={{ border: "4px solid #F5BB00", borderRadius: "8px" }}>
        {imgSources.map((img, index) => (
          <img key={index} src={img} width="400" height="400"></img>
        ))}
      </Marquee>
    </div>
  );
};

export default Gallery;
