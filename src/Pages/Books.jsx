import Book from "./Book";

const Books = ({ data }) => {

  //  3. Data fetch by using Loader

  return (
    <div>
      <h1 className="text-center font-bold text-2xl p-6">All Books</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
