import React from "react";
import ReactDOM from "react-dom/client";
import { Router, RouterProvider, createBrowserRouter } from "react-router-dom";

import Posts, { loader as postsLoader } from "./routes/Posts.jsx";
import NewPost, { action as newPostAction } from "./routes/NewPost.jsx";
import PostDetails, {loader as postDetailsLoader, action as deletePostAction}from "./routes/PostDetails.jsx";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import RootLayout from "./routes/RootLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Posts />,
        //using loader to load data when the element is initialized
        loader: postsLoader,
        children: [
          { path: "/create-post", element: <NewPost />, action: newPostAction },
          { path: "/:postId", element: <PostDetails />, loader: postDetailsLoader , action: deletePostAction}
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
