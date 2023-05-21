import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import Swal from "sweetalert2";
import { useEffect, useState } from "react";

const UpdateToy = () => {
  const navigate = useNavigate();
  const [toy, setToy] = useState({});
  const id = useParams();
  const toyId = id.id;
  console.log(toy);

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
  useEffect(() => {
    fetch(`https://b7a11-toy-marketplace-server.vercel.app/toy/${toyId}`)
      .then((res) => res.json())
      .then((data) => setToy(data));
  }, [toyId]);

  return (
    <>
      <h1 className="text-center text-5xl font-bold mt-28">
        Update: {toy.toyname}
      </h1>
      <div className="flex justify-center mt-20">
        <div className="card border-2 w-96 bg-base-100 shadow-xl">
          <PageTitle title={`Update:`}></PageTitle>
          <figure className="px-10 pt-10">
            <img src={toy.picture} className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <form
              className=" flex flex-col gap-2"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="flex justify-center gap-2">
                <input
                  className="input w-full input-bordered"
                  type="number"
                  placeholder="Price (USD)"
                  {...register("price", { required: true })}
                />
                <input
                  className="input w-full input-bordered"
                  type="number"
                  placeholder="Quanitity"
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
        </div>
      </div>
    </>
  );
};

export default UpdateToy;
