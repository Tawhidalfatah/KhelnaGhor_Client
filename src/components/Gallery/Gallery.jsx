import PhotoAlbum from "react-photo-album";

const photos = [
  {
    src: "https://i.ibb.co/rQbvcZP/logan.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/mbmhV2n/batman.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/gSdXJRC/aquaman.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/dKrcc25/wonderwoman.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/sj4Ysvp/wonderwhite.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/Kh8p1FG/thanos.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/FnQY8Dx/superman.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/vLxN27Q/groot.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/gwJjwYk/strange.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/4pTyWj1/gamora.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/4sDSpBJ/gwen.png",
    width: 200,
    height: 200,
  },
  {
    src: "https://i.ibb.co/LSgRz0v/drax.png",
    width: 200,
    height: 200,
  },
];

const Gallery = () => {
  return (
    <>
      <h1 className="text-center text-3xl lg:text-6xl my-10">
        Meet your favourite superheroes!!
      </h1>
      <div className="border-2 rounded-lg shadow-lg bg-base-300 p-10">
        <PhotoAlbum layout="rows" photos={photos} />
      </div>
    </>
  );
};

export default Gallery;
