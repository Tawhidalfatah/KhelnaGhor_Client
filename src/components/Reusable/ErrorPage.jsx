import Lottie from "lottie-react";

import { useRouteError } from "react-router-dom";
import batSignal from "../../assets/batsignal.json";

const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div className="hero min-h-screen bg-base-100">
      <div className="hero-content flex-col">
        <h1 className="text-8xl text-black text-center font-bangers">
          Can not find Batman!!
        </h1>
        <br />
        <Lottie animationData={batSignal} loop={true}></Lottie>
        <div>
          <br />
          <h1 className="text-5xl text-black text-center">{error.data}</h1>
          <br />
          <div className="flex justify-center">
            <a href="/">
              <button className="btn bg-[#F5BB00] hover:bg-[#cc9c00] text-xl text-black">
                Go to Home
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
