const imgSources = [
  {
    img: "https://i.ibb.co/rQbvcZP/logan.png",
    phrase: "They call me Wolverine",
  },

  {
    img: "https://i.ibb.co/mbmhV2n/batman.png",
    phrase: "I am the Dark Knight",
  },

  {
    img: "https://i.ibb.co/gSdXJRC/aquaman.png",
    phrase: "I am the King of the Sea",
  },

  {
    img: "https://i.ibb.co/dKrcc25/wonderwoman.png",
    phrase: "I am an Amazonian",
  },

  {
    img: "https://i.ibb.co/sj4Ysvp/wonderwhite.png",
    phrase: "I am an Amazonian but better",
  },

  {
    img: "https://i.ibb.co/Kh8p1FG/thanos.png",
    phrase: "Gone, reduced to Atoms",
  },

  { img: "https://i.ibb.co/FnQY8Dx/superman.png", phrase: "S means Hope" },

  { img: "https://i.ibb.co/vLxN27Q/groot.png", phrase: "I am Groot" },

  {
    img: "https://i.ibb.co/gwJjwYk/strange.png",
    phrase: "Dr. Stephen Strange",
  },

  {
    img: "https://i.ibb.co/4pTyWj1/gamora.png",
    phrase: "I am what my father made me",
  },

  {
    img: "https://i.ibb.co/4sDSpBJ/gwen.png",
    phrase: "Yehe, Spider-Gwen here",
  },

  { img: "https://i.ibb.co/LSgRz0v/drax.png", phrase: "You can not see me" },
];

const Gallery = () => {
  return (
    <>
      <h1 className="text-center font-bold text-3xl lg:text-6xl my-14">
        Meet your favourite Superheroes & Villains
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 my-10 py-10 gap-5">
        {imgSources.map((img, index) => {
          return (
            <div
              data-tip={img.phrase}
              className="border tooltip tooltip-warning  border-[#F5BB00] rounded-lg shadow-lg flex justify-center"
              key={index}
            >
              <img src={img.img} width={200} height={200} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
