import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import { Rating } from "@smastrom/react-rating";

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
      <PageTitle title={`KG || ${toyname} Details`}></PageTitle>
      <div className="card  bg-base-100 shadow-xl py-36">
        <figure>
          <img
            className="border rounded-lg bg-base-300 shadow-lg"
            src={picture}
            alt="Album"
          />
        </figure>
        <div className="flex flex-col justify-evenly">
          <div className="text-center">
            <h3 className="underline decoration-6 underline-offset-8 py-5 text-3xl">
              Seller Info
            </h3>

            <p className="py-2 text-xl">Name: {seller}</p>
            <p>Email: {email}</p>
          </div>
          <div className="divider"></div>
          <h3 className="underline text-center decoration-6 underline-offset-8 py-10 text-2xl">
            Toy Info
          </h3>
          <h2 className="text-center text-5xl font-bold pb-10">{toyname}</h2>

          <div className="flex justify-around text-center text-3xl font-bold">
            <p>price: ${price}</p>
            <Rating
              style={{ maxWidth: 180 }}
              value={Math.round(rating)}
              readOnly
            />
            <p>Quantity: {quantity}</p>
          </div>

          <p className="text-center text-2xl p-10">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ToyDetails;
