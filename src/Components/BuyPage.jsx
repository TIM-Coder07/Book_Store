import React from "react";
import { useLocation, useNavigate } from "react-router";

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const book = location.state?.book;

  if (!book) {
    // যদি কেউ সরাসরি /buy URL খোলে
    return (
      <div className="text-center py-20">
        <h2 className="text-xl font-semibold text-gray-500">
          No Book Selected 😅
        </h2>
        <button
          onClick={() => navigate(-1)}
          className="btn mt-5 bg-amber-500 hover:bg-amber-600 text-white rounded-full px-5"
        >
          Go Back
        </button>
      </div>
    );
  }

  // WhatsApp function
  const handleWhatsApp = () => {
    const phoneNumber = "01625587701";
    const message = `Hello! I want to buy this book:\n\n📚 Name: ${book.bookName}\n✍️ Author: ${book.author}\n⭐ Rating: ${book.rating}\n📅 Year: ${book.yearOfPublishing}`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Buy {book.bookName}
      </h1>
      <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
        <img
          src={book.image}
          alt={book.bookName}
          className="w-60 h-72 object-cover rounded-xl shadow-md"
        />
        <div className="flex-1 space-y-3">
          <h2 className="text-2xl font-semibold text-amber-700">
            {book.bookName}
          </h2>
          <h3 className="text-lg font-medium text-gray-700">
            Author: {book.author}
          </h3>
          <p className="text-gray-600">{book.review}</p>
          <div className="flex justify-between mt-4 text-gray-700 font-medium">
            <span>⭐ Rating: {book.rating}</span>
            <span>📅 Year: {book.yearOfPublishing}</span>
          </div>
          <div className="flex justify-between mt-2 text-gray-600 font-semibold">
            <span>📖 Pages: {book.totalPages}</span>
            <span>🏢 Publisher: {book.publisher}</span>
          </div>
          <button
            onClick={handleWhatsApp}
            className="btn bg-green-500 hover:bg-green-600 text-white font-semibold mt-6 rounded-full px-6 py-2"
          >
            Proceed to Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
