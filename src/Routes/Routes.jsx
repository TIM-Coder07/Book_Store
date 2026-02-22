import React from "react";
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Root/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import About from "../Pages/About/About";
import BookDetails from "../Pages/BookDetails/BookDetails";
import ReadList from "../ReadList/ReadList";
import BuyPage from "../Components/BuyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'),
        path: '/',
        Component: Home
      },
      {
        path: '/about',
        Component: About
      },
      {
        path: '/readList',
        loader: () => fetch('/booksData.json'),
        Component: ReadList
      },
      {
        path: '/buy',
        loader: () => fetch('/booksData.json'),
        Component: BuyPage
      },
      {
        path: '/bookDetails/:id',
        loader: () => fetch('/booksData.json'),
        Component:BookDetails
      },
    ]
  },
]);
