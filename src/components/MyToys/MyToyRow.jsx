import { FaUpload } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const MyToyRow = ({ myToy, index }) => {
  const {
    description,
    email,
    picture,
    price,
    quantity,
    rating,
    seller,
    subcategory,
    toyname,
  } = myToy;
  return (
    <>
      <tr>
        <th>{index + 1}</th>

        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-14 h-42">
                <img src={picture} />
              </div>
            </div>
            <div>
              <div className="font-bold">{toyname}</div>
            </div>
          </div>
        </td>
        <td>{seller}</td>
        <td>{email}</td>
        <td>{subcategory}</td>
        <td>${price}</td>
        <td>{rating}</td>
        <td>{quantity}</td>
        <td className="truncate">{description.slice(-0, 20)}...</td>
        <td className="flex justify-between items-center gap-2">
          <button className="btn btn-square ">
            <FaUpload className="w-5 h-5" />
          </button>
          <button className="btn btn-square">
            <MdDelete className="w-5 h-5" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyRow;
