import React from "react";
import { Link } from "react-router";

const Book = ({ singleBook }) => {
  //   console.log(singleBook);

  const {
    bookId,
    bookName,
    author,
    image,
    review,
    yearOfPublishing,
    publisher,
    rating,
    totalPages,
  } = singleBook;

  return (
    <Link to={`/bookDetails/${bookId}`}>
      <div>
        <div className="card bg-gradient-to-b from-amber-50 to-white border border-amber-100 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 rounded-2xl max-w-sm mx-auto overflow-hidden">
          {/* Image Section */}
          <figure className="bg-amber-100 p-5">
            <img
              className="rounded-xl w-[220px] h-[260px]  object-cover mx-auto shadow-md hover:scale-105 transition-transform duration-300"
              src={image}
              alt={bookName}
            />
          </figure>

          {/* Card Body */}
          <div className="card-body space-y-3">
            <h2 className="card-title text-2xl font-bold text-amber-700 tracking-wide">
              {bookName}
            </h2>
            <h3 className="font-semibold text-gray-700">✍️ {author}</h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
              {review}
            </p>

            <div className="flex justify-between items-center mt-2">
              <span className="text-sm font-medium text-gray-700 bg-amber-100 px-3 py-1 rounded-full">
                ⭐ Rating: {rating}
              </span>
              <span className="text-sm text-gray-500">
                📅 {yearOfPublishing}
              </span>
            </div>

            <div className="flex justify-between text-sm font-semibold text-gray-600 border-t border-gray-200 pt-3">
              <div>
                <h4>📖 Pages: {totalPages}</h4>
                <h4>🏢 Publisher: {publisher}</h4>
              </div>
            </div>

            {/* Button */}
            <div className="card-actions justify-end mt-4">
              <Link to={'/buy'}>
                <button className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 rounded-full shadow-md transition">
                  Buy Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
