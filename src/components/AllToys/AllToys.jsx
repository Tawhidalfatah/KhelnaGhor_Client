import PageTitle from "../Reusable/PageTitle/PageTitle";
import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";

const AllToys = () => {
  const [allToys, setAllToys] = useState([]);
  const [searchName, setSearchName] = useState("");

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server.vercel.app/alltoys?toyname=${searchName}`
    )
      .then((res) => res.json())
      .then((data) => setAllToys(data));
  }, [searchName]);

  return (
    <>
      <div className="flex justify-center my-5 ">
        <PageTitle title={`All Toys`}></PageTitle>

        <input
          onChange={(e) => setSearchName(e.target.value)}
          type="text"
          placeholder="Search by Toy Name"
          className="input input-bordered w-1/2 rounded-lg shadow-lg"
        />
      </div>
      <div className="overflow-x-auto mt-2 rounded-lg shadow-lg">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>SL</th>
              <th>Toy</th>
              <th>Seller</th>
              <th>Sub-Category</th>
              <th>Price</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {allToys.map((toy, index) => (
              <ToyRow key={toy._id} toy={toy} index={index}></ToyRow>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllToys;
