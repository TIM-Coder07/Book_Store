import React from "react";
import bookImg from "../../assets/books.jpg";

const Banner = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-amber-100 via-white to-amber-50 shadow-lg rounded-2xl p-8 md:p-12 gap-6">
      {/* Text Section */}
      <div className="md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 leading-snug">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
          aspernatur. Discover the journey of knowledge through every page!
        </h1>
        <p className="text-gray-600 text-sm md:text-base">
          Explore amazing stories, insightful lessons, and timeless wisdom with
          our latest collection of books.
        </p>
        <button className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full px-6">
          Buy Book
        </button>
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center">
        <img
          className="w-64 md:w-80 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          src={bookImg}
          alt="Book Cover"
        />
      </div>
    </div>
  );
};

export default Banner;
