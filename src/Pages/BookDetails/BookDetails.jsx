import React from "react";
import { useLoaderData, useParams, useNavigate } from "react-router";
import { AddStoreDB, AddWishlistDB } from "../../Utility/Utility";

const BookDetails = () => {
  const { id } = useParams();
  const bookId = Number(id);
  const data = useLoaderData();
  const navigate = useNavigate();

  const book = data?.find(b => b.bookId === bookId) || {};

  const handleMarkAsRead = () => {
    AddStoreDB(bookId);
    navigate("/readList");
  };

  const handleWishlist = () => {
    AddWishlistDB(bookId);
    navigate("/readList", { state: { tab: "wishlist" } });
  };

  const handleBuyNow = () => {
    // Pass book object to Buy page via state
    navigate("/buy", { state: { book } });
  };

  return (
    <div className="card max-w-sm mx-auto my-10 bg-gradient-to-b from-amber-50 to-white border border-amber-100 shadow-md rounded-2xl overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
      <figure className="bg-amber-100 p-5">
        <img
          src={book.image}
          alt={book.bookName}
          className="rounded-xl w-[220px] h-[260px] object-cover mx-auto shadow-md hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body space-y-3">
        <h2 className="text-2xl font-bold text-amber-700">{book.bookName}</h2>
        <h3 className="font-semibold text-gray-700">✍️ {book.author}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">{book.review}</p>

        <div className="card-actions justify-between mt-4">
          <button onClick={handleMarkAsRead} className="btn bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 rounded-full shadow-md">
            Mark as Read
          </button>
          <button onClick={handleWishlist} className="btn bg-green-500 hover:bg-green-600 text-white font-semibold px-5 rounded-full shadow-md">
            Add to Wishlist
          </button>
          <button onClick={handleBuyNow} className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold px-5 rounded-full shadow-md">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;