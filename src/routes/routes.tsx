import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Login";
import Register from "../pages/Register";

import ProtectedRoute from "../components/layout/ProtectedRoute";

import AllProject from "../pages/AllProject";
import AddProject from "../pages/AddProject";
import AddBlog from "../pages/AddBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <App />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "",
        element: <AllProject />,
      },
      {
        path: "add-project",
        element: <AddProject />,
      },
      {
        path: "add-blog",
        element: <AddBlog />,
      },

      // {
      //   path: "bulk-delete",
      //   element: <BulkDelete />,
      // },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);

export default router;
