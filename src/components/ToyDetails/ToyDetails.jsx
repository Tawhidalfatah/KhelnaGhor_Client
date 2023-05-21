import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Reusable/PageTitle/PageTitle";

const ToyDetails = () => {
  const id = useParams();
  const toyId = id.id;
  console.log(toyId);
  const [toyDetails, setToyDetails] = useState({});
  const {
    toyname,
    seller,
    email,
    picture,
    rating,
    description,
    quantity,
    price,
  } = toyDetails;

  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server.vercel.app/toy/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToyDetails(data));
  }, [toyId]);

  return (
    <>
      <PageTitle title={`${toyname} Details`}></PageTitle>
      <div className="card lg:card-side bg-base-100 shadow-xl my-10">
        <figure>
          <img
            className="border rounded bg-base-300 shadow-lg"
            src={picture}
            alt="Album"
          />
        </figure>
        <div className="flex flex-col justify-evenly">
          <div className="text-center">
            <h3 className="underline decoration-6 underline-offset-8 py-3 text-2xl">
              Seller Info
            </h3>

            <p className="py-2">Name: {seller}</p>
            <p>Email:{email}</p>
          </div>
          <div className="divider"></div>
          <h3 className="underline text-center decoration-6 underline-offset-8 py-3 text-2xl">
            Toy Info
          </h3>
          <h2 className="text-center text-4xl font-bold pb-10">{toyname}</h2>
          <div>
            <div className="flex justify-around text-center text-xl">
              <p>price: {price}$</p>
              <p>Rating: {rating}</p>
              <p>Quantity: {quantity}</p>
            </div>
          </div>

          <p className="text-center text-xl p-1">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
