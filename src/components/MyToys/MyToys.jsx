import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import PageTitle from "../Reusable/PageTitle/PageTitle";

const MyToys = () => {
  const { user, setLoader } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toggle, setToggle] = useState(false);
  const [sortBy, setSortBy] = useState(" ");
  const userEmail = user.email;
  console.log(sortBy);

  useEffect(() => {
    fetch(
      `https://b7a11-toy-marketplace-server.vercel.app/alltoys/${userEmail}?sortby=${sortBy}`
    )
      .then((res) => res.json())
      .then((data) => {
        setMyToys(data);
      });
  }, [userEmail, toggle, sortBy, setLoader]);

  console.log(myToys);

  return (
    <div className="overflow-x-auto mt-2 rounded-lg shadow-lg">
      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        name="sortby"
        id=""
      >
        <option value="all">Default</option>
        <option value="descending">Descending</option>
        <option value="ascending">Ascending</option>
      </select>
      <PageTitle title="My Toys"></PageTitle>

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
  );
};

export default MyToys;
