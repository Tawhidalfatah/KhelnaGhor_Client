import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";

const AllToys = () => {
  const allToys = useLoaderData();

  return (
    <div className="overflow-x-auto mt-14 rounded-lg shadow-lg">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>SL</th>
            <th>Seller</th>
            <th>Toy</th>
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

          {/* <tr>
            <th>1</th>
            <td>nam</td>
            <td>Quality</td>
            <td>Blue</td>
            <td>Blue</td>
            <td>Blue</td>
            <td></td>
          </tr> */}
        </tbody>
      </table>
    </div>
  );
};

export default AllToys;
