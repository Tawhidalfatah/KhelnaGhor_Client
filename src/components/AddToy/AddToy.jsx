import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProvider";

const AddToy = () => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/addtoy", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => console.log(result));
  };
  console.log(errors);

  return (
    <div className="mt-44">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input
            className="w-1/2  input input-bordered input-md"
            type="text"
            value={user.displayName}
            placeholder="Seller Name"
            {...register("seller", { required: true })}
          />
          <input
            className="w-1/2 input input-bordered input-md"
            type="email"
            value={user.email}
            placeholder="Seller Email"
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
          />
        </div>

        <div className="flex justify-center">
          <input
            className="w-1/2 input input-bordered input-md"
            type="text"
            placeholder="Toy Name"
            {...register("toyname", { required: true })}
          />
          <select
            className=" select select-bordered"
            {...register("subcategory", { required: true })}
          >
            <option value="Marvel">Marvel</option>
            <option value="DC">DC</option>
            <option value="Star Wars">Star Wars</option>
          </select>
        </div>

        <div className="flex justify-center">
          <input
            className="w-1/2 input input-bordered input-md"
            type="url"
            placeholder="Toy URL"
            {...register("picture", { required: true, maxLength: 100 })}
          />
        </div>

        <div className="flex justify-center">
          <input
            className="input input-bordered input-md"
            type="number"
            placeholder="Toy Rating"
            {...register("rating", {
              required: true,

              max: 5,
              min: 1,
              maxLength: 1,
            })}
          />
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

export default AddToy;
