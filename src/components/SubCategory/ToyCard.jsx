import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";

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
      <figure className="px-10 pt-10">
        <img src={picture} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{toyname}</h2>
        <p>Price: {price}</p>
        <p>Rating: {rating}</p>
        <div className="card-actions">
          <button
            onClick={() => handleDetails(_id)}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default ToyCard;
