import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
  const { user } = useContext(AuthContext);

  const userEmail = user.email;
  const [myToys, setMyToys] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/alltoys/${userEmail}`)
      .then((res) => res.json())
      .then((data) => setMyToys(data));
  }, [userEmail]);

  console.log(myToys);

  return (
    <div className="overflow-x-auto mt-2 rounded-lg shadow-lg">
      <table className="table w-full">
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
            <MyToyRow key={myToy._id} index={index} myToy={myToy}></MyToyRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyToys;
