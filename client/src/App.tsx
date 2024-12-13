import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import SinglePost from "./pages/SinglePost";
import MainLayout from "./layouts/MainLayout";
import AllPosts from "./pages/AllPosts";

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/posts",
        element: <AllPosts />,
      },
      {
        path: "/write",
        element: <Write />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/:slug",
        element: <SinglePost />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;
