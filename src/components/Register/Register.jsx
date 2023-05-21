import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import PageTitle from "../Reusable/PageTitle/PageTitle";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [photo, setPhoto] = useState("");
  const [error, setError] = useState(" ");

  const handleSignUp = (event) => {
    event.preventDefault();
    createUser(email, password)
      .then((result) => {
        updateProfile(result.user, {
          displayName: name,
          photoURL: photo,
        })
          .then(() => {})
          .catch((error) => console.log(error));
        Swal.fire("Good job!", "You have Succesfully Registered!", "success");
        navigate("/");
      })
      .catch((error) => setError(error));
  };

  return (
    <div className="hero min-h-screen">
      <PageTitle title={`KG || Registration`}></PageTitle>
      <div className="hero-content flex-col lg:flex-row-reverse ">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Register Now!</h1>
          <p className="py-6">Sign Up to browse your favourite pop figures</p>
        </div>
        <div className="card w-full max-w-xl shadow-2xl bg-[#373A36]">
          <div className="card-body">
            <form>
              <div className="form-control">
                {error && <p>{error.message}</p>}
                <label className="label">
                  <span className="label-text text-white">Name</span>
                </label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Email</span>
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Photo URL</span>
                </label>
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  type="url"
                  name="photo"
                  placeholder="Photo URL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-white">Password</span>
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <br />
                <Link
                  to="/login"
                  className="  text-white hover:text-[#F5BB00] link "
                >
                  Already have an account? Sign In!!
                </Link>
              </div>
              <div className="form-control mt-6">
                <button
                  onClick={handleSignUp}
                  className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black"
                >
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
