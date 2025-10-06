import React from "react";
import { Link } from "react-router-dom";
const Library = () => {
  return (
    <div
      className="hero 
      w-full min-h-screen
      imgBackground
      flex flex-col justify-start items-cenetr
      "
    >
      <div className="text-neutral-content">
        <div className="max-w-md">
          <div className="flex flex-col justify-center items-center text-center p-5 bg-black/30 rounded-lg">
            <h1 className="mb-2 text-2xl font-bold text-shadow-lg/20 text-yellow-300">
              নতুন সহপাঠি লাইব্রেরী
            </h1>
            <p className="text-justify text-yellow-100">
              নতুন সহপাঠি লাইব্রেরীতে তোমার জন্য রয়েছে বিভিন্ন বিষয়ে শত শত বই।
              এই বই গুলো তোমার প্রয়োজন অনুযায়ী স্কুল এবং কলেজ লাইব্রেরী থেকে
              ডাউনলোড করে নিতে পার।
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 my-5">
            <Link
              to="/school"
              className="bg-primary hover:bg-lime-400 rounded-full text-shadow-lg/20 text-white px-5 py-2 w-72 text-2xl font-bold text-center"
            >
              স্কুল লাইব্রেরী
            </Link>

            {/* <Link to="/college" className="btn btn-primary text-white w-56 p-2">
              কলেজ লাইব্রেরী
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Library;
