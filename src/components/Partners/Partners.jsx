const Partners = () => {
  const imgSources = [
    "https://i.ibb.co/9cKDbWm/wb.png",

    "https://i.ibb.co/9pSh7SX/Marvel-logo-red.png",

    "https://i.ibb.co/qkJYDmr/lucas.png",

    "https://i.ibb.co/8z8h2Xb/dc.png",

    "https://i.ibb.co/1TVJXG4/disney.png",
  ];
  return (
    <div className="mt-36 pb-14">
      <h2 className="text-center text-5xl py-10">Our Affiliated Partners</h2>
      <div className="flex flex-col lg:flex-row items-center justify-around py-16">
        {imgSources.map((img, index) => (
          <img key={index} src={img} width="200" height="200"></img>
        ))}
      </div>
    </div>
  );
};

export default Partners;
