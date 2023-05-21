import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PageTitle from "../Reusable/PageTitle/PageTitle";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const convertedPrice = parseFloat(data.price);
    data.price = convertedPrice;
    fetch("https://b7a11-toy-marketplace-server.vercel.app/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.insertedId) {
          Swal.fire("Good job!", "You added Toy Successfully", "success");
          navigate("/alltoys");
        }
      });
  };
  console.log(errors);

  return (
    <>
      <PageTitle title={`Add Toy`}></PageTitle>
      <div className="mt-24 border-4 shadow-lg rounded-lg p-14 font-extrabold">
        <h1 className="text-6xl text-center font-bold my-14">Add a Toy</h1>
        <form
          className="flex flex-col gap-5 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="flex gap-2">
            <input
              className="w-1/2 border-2 border-[#F5BB00]  input input-bordered input-md"
              type="text"
              value={user.displayName}
              placeholder="Seller Name"
              {...register("seller", { required: true })}
            />
            <input
              className="w-1/2 border-2 border-[#F5BB00] input input-bordered input-md"
              type="email"
              value={user.email}
              placeholder="Seller Email"
              {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            />
          </div>

          <div className="flex gap-2 justify-center">
            <input
              className="w-1/2 border-2 border-[#F5BB00] input input-bordered input-md"
              type="text"
              placeholder="Toy Name"
              {...register("toyname", { required: true })}
            />
            <select
              className=" select select-bordered border-2 border-[#F5BB00]"
              {...register("subcategory", { required: true })}
            >
              <option value="Marvel">Marvel</option>
              <option value="DC">DC</option>
              <option value="Star Wars">Star Wars</option>
            </select>
          </div>

          <div className="flex justify-center">
            <input
              className="w-1/2 border-2 border-[#F5BB00] input input-bordered input-md"
              type="url"
              placeholder="Toy URL"
              {...register("picture", { required: true, maxLength: 100 })}
            />
          </div>

          <div className="flex gap-2 justify-center">
            <input
              className="border-2 border-[#F5BB00] input input-bordered input-md"
              type="number"
              placeholder="Rating: 1 - 5"
              {...register("rating", {
                required: true,

                max: 5,
                min: 1,
                maxLength: 1,
              })}
            />
            <input
              className="border-2 border-[#F5BB00] input input-bordered input-md"
              type="number"
              placeholder="Available Quanitity"
              {...register("quantity", { required: true })}
            />
            <input
              className="border-2 border-[#F5BB00] input input-bordered input-md"
              type="number"
              placeholder="Price"
              {...register("price", { required: true })}
            />
          </div>
          <div className="flex justify-center">
            <input
              className="w-1/2 border-2 border-[#F5BB00] input input-bordered input-md"
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
    </>
  );
};

export default AddToy;
