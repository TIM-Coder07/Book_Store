// Utility.js

// ================= READ LIST =================
const storeBook = () => {
  const storeBookSTR = localStorage.getItem("readList");
  return storeBookSTR ? JSON.parse(storeBookSTR) : [];
};

const AddStoreDB = (id) => {
  let readList = storeBook();
  let wishlist = getWishlist();

  if (readList.includes(id)) {
    alert("Already Exist in Read List");
    return;
  }

  // Remove from Wishlist if exists
  wishlist = wishlist.filter((w) => w !== id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));

  // Add to ReadList
  readList.push(id);
  localStorage.setItem("readList", JSON.stringify(readList));
};

// ================= WISHLIST =================
const getWishlist = () => {
  const wishlistSTR = localStorage.getItem("wishlist");
  return wishlistSTR ? JSON.parse(wishlistSTR) : [];
};

const AddWishlistDB = (id) => {
  let wishlist = getWishlist();
  let readList = storeBook();

  if (wishlist.includes(id)) {
    alert("Already Exist in Wishlist");
    return;
  }

  // Remove from ReadList if exists
  readList = readList.filter((r) => r !== id);
  localStorage.setItem("readList", JSON.stringify(readList));

  // Add to Wishlist
  wishlist.push(id);
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
};

export { AddStoreDB, storeBook, AddWishlistDB, getWishlist };
