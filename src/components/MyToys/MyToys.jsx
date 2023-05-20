import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";
import PageTitle from "../Reusable/PageTitle/PageTitle";

const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const [toggle, setToggle] = useState(false);
  const userEmail = user.email;

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [userEmail, toggle]);

  console.log(myToys);

  return (
    <div className="overflow-x-auto mt-2 rounded-lg shadow-lg">
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
