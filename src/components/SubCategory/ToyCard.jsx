import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { Rating } from "@smastrom/react-rating";

const ToyCard = ({ toy }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const { _id, picture, toyname, price, rating } = toy;

  const handleDetails = (id) => {
    if (user) {
      navigate(`toy/${id}`);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "You need login first!",
        footer: "Click OK to login",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login");
        }
      });
    }
  };
  return (
    <div className="card w-80 lg:w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10 ">
        <img
          src={picture}
          alt="Shoes"
          className="border rounded-lg bg-base-300"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyname}</h2>
        <p>Price: {price}</p>
        <Rating style={{ maxWidth: 180 }} value={Math.round(rating)} readOnly />
        <p>Rating: </p>
        <div className="card-actions">
          <button
            onClick={() => handleDetails(_id)}
            className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
