import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import Swal from "sweetalert2";

const UpdateToy = () => {
  const navigate = useNavigate();
  const id = useParams();
  const toyId = id.id;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch(
      `https://b7a11-toy-marketplace-server.vercel.app/updatetoy/${toyId}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          Swal.fire("Good job!", "You Updated Toy Successfully", "success");
          navigate("/mytoys");
        }
      });
  };
  console.log(errors);

  return (
    <div className="mt-44">
      <PageTitle title={`Update:`}></PageTitle>
      {/* <figure className="flex justify-center">
        <img className="w-72 h-72" src={toyDetails?.picture} alt="" />
      </figure> */}
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input input-bordered input-md"
          type="number"
          placeholder="Price"
          {...register("price", { required: true })}
        />

        <div className="flex justify-center">
          <input
            className="input input-bordered input-md"
            type="number"
            placeholder="Available Quanitity"
            {...register("quantity", { required: true })}
          />
        </div>
        <div className="flex justify-center">
          <input
            className="w-1/2 input input-bordered input-md"
            type="text"
            placeholder="Toy Description"
            {...register("description", { required: true })}
          />
        </div>

        <div className="flex justify-center">
          <input
            className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default UpdateToy;
