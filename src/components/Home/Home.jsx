import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="bg-white mt-10">
      <div className="container flex gap-5 flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">
            Your
            <span className="dark:text-violet-400">Feedback </span> And Review
          </h1>
          <p className="mt-6 mb-8 text-xl font-bold sm:mb-12">Important To Us</p>
          <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
            <Link
              rel="noopener noreferrer"
              to="/reviews"
              className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Reviews
            </Link>
            <Link
              rel="noopener noreferrer"
              to="/rechart"
              className="px-8 py-3 text-lg font-semibold border rounded bg-indigo-400"
            >
              Rechart
            </Link>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <img
            src="https://img.freepik.com/free-vector/successful-businessman-with-golden-trophy_1302-6135.jpg?w=740&t=st=1665338878~exp=1665339478~hmac=a39dfab3db8f2483395e3e65fe26fb7214484ef2913d5dfb50f4817e8f6876e8"
            alt=""
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
