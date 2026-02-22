import React, { useEffect, useState } from "react";
import { useLoaderData, useLocation } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { storeBook, getWishlist } from "../Utility/Utility";
import Book from "../Pages/Book";

const ReadList = () => {
  const data = useLoaderData();
  const location = useLocation();
  const [readList, setReadList] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (!data) return;

    const readIds = storeBook().map(Number);
    const myReadList = data.filter((b) => readIds.includes(b.bookId));
    setReadList(myReadList);

    const wishIds = getWishlist().map(Number);
    const myWishlist = data.filter((b) => wishIds.includes(b.bookId));
    setWishlist(myWishlist);

    if (location.state?.tab === "wishlist") setTabIndex(1);
  }, [data, location.state]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">📚 My Collection</h1>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList className="flex justify-center gap-6 mb-8 border-b border-gray-300">
          <Tab
            className="cursor-pointer px-6 py-2 text-lg font-medium text-gray-600 hover:text-primary transition"
            selectedClassName="text-primary border-b-4 border-primary"
          >
            Read Books
          </Tab>
          <Tab
            className="cursor-pointer px-6 py-2 text-lg font-medium text-gray-600 hover:text-primary transition"
            selectedClassName="text-primary border-b-4 border-primary"
          >
            Wishlist
          </Tab>
        </TabList>

        <TabPanel>
          {readList.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-gray-500 text-xl">No Read Books Yet 📭</h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {readList.map((b) => (
                <Book key={b.bookId} singleBook={b} />
              ))}
            </div>
          )}
        </TabPanel>

        <TabPanel>
          {wishlist.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-gray-500 text-xl">
                Your Wishlist is Empty 💭
              </h2>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {wishlist.map((b) => (
                <Book key={b.bookId} singleBook={b} />
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
