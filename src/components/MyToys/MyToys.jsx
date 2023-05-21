import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import { InfinitySpin } from "react-loader-spinner";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sortBy, setSortBy] = useState(" ");
  const [loader, setLoader] = useState(false);
  const userEmail = user.email;
  console.log(sortBy);

  useEffect(() => {
    setLoader(true);
    fetch(
      `https://b7a11-toy-marketplace-server.vercel.app/alltoys/${userEmail}?sortby=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
        setLoader(false);
      });
  }, [userEmail, toggle, sortBy]);

  console.log(myToys);

  return (
    <>
      <PageTitle title="KG || My Toys"></PageTitle>

      {loader ? (
        <div className="flex justify-center my-72">
          <InfinitySpin width="200" color="#F5BB00"></InfinitySpin>
        </div>
      ) : (
        <div className="overflow-x-auto mt-2 rounded-lg shadow-lg">
          <div className="flex justify-center gap-2 items-center  my-5">
            <label className="label font-bold">Sort By Price :</label>
            <select
              className="select select-warning select-md"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              name="sortby"
              id=""
            >
              <option selected value="all">
                Default
              </option>
              <option value="descending">Descending</option>
              <option value="ascending">Ascending</option>
            </select>
          </div>
          <table className="table table-auto w-full">
            <thead>
              <tr>
                <th>SL</th>
                <th>Toy</th>
                <th>Seller</th>
                <th>Email</th>
                <th>Sub-Category</th>
                <th>Price</th>
                <th>Rating</th>
                <th>Quantity</th>
                <th>Description</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {myToys.map((myToy, index) => (
                <MyToyRow
                  key={myToy._id}
                  index={index}
                  myToy={myToy}
                  toggle={toggle}
                  setToggle={setToggle}
                ></MyToyRow>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default MyToys;
