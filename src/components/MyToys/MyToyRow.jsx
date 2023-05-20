import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyToyRow = ({ myToy, index, toggle, setToggle }) => {
  const {
    _id,
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
  const handleDelete = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/toy/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              setToggle(!toggle);
            }
          });
      }
    });
  };
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
        <td>{description.slice(-0, 20)}...</td>
        <td className="flex justify-between items-center gap-2">
          <Link to={`/updatetoy/${_id}`}>
            <button className="btn btn-square bg-[#F5BB00] hover:bg-[#cc9c00] text-black">
              <FaEdit className="w-5 h-5" />
            </button>
          </Link>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-square bg-[#F5BB00] hover:bg-[#cc9c00] text-black"
          >
            <MdDelete className="w-5 h-5" />
          </button>
        </td>
      </tr>
    </>
  );
};

export default MyToyRow;
