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
    <>
      <h1 className="text-center text-3xl lg:text-6xl my-10">
        Meet your favourite superheroes!!
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10 py-10 gap-5">
        {imgSources.map((img, index) => {
          return (
            <div
              className="border border-[#F5BB00] rounded-lg shadow-lg flex justify-center"
              key={index}
            >
              <img src={img} width={200} height={200} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
