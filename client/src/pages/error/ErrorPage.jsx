import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="container text-center flex flex-col items-center justify-center pb-6">
      <div
        className="four_zero_four_bg bg-cover bg-center h-[350px] md:h-[400px] w-full max-w-[800px] m-auto px-4"
        style={{
          backgroundImage:
            "url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
        }}></div>
      <div>
        <h1 className="text-center text-3xl md:text-5xl text-black font-mono mb-4">
          404
        </h1>
        <h3 className="text-3xl md:text-5xl font-bold font-mono">
          Look like you're lost
        </h3>
        <p className="md:text-xl font-mono mt-2 ">
          The page you are looking for is not available!
        </p>
        <Link to="/">
          <p className="link_404 bg-green-500 text-white py-2 md:py-4 px-4 md:px-8 mt-6 inline-block rounded-sm font-mono text-xl">
            Go to Home
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
