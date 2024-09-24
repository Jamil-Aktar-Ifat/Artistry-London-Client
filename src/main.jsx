import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Layout/Root";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import AuthProvider from "./Providers/AuthProvider";
import AddCraft from "./Pages/AddCraft/AddCraft";
import ArtCraft from "./Pages/ArtCraft/ArtCraft";
import PrivateRoutes from "./Routes/PrivateRoutes";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import ViewDetails from "./Pages/ViewDetails/ViewDetails";
import MyCrafts from "./Pages/MyCrafts/MyCrafts";
import UpdatePage from "./Pages/UpdatePage/UpdatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/artCraft",
        element: (
          <PrivateRoutes>
            <ArtCraft></ArtCraft>
          </PrivateRoutes>
        ),
      },
      {
        path: "/addCraft",
        element: (
          <PrivateRoutes>
            <AddCraft></AddCraft>
          </PrivateRoutes>
        ),
      },
      {
        path: `/crafts/:id`,
        element: (
          <PrivateRoutes>
            <ViewDetails></ViewDetails>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/crafts/${params.id}`),
      },
      {
        path: "/myCrafts",
        element: (
          <PrivateRoutes>
            <MyCrafts></MyCrafts>
          </PrivateRoutes>
        ),
      },
      {
        path: `/update/:id`,
        element: (
          <PrivateRoutes>
            <UpdatePage></UpdatePage>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5005/crafts/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);


/**
 * 
 * {
 "item_name": "Ceramic Vase with Glaze",
    "subcategory_name": "Ceramics",
    "short_description": "A custom-designed ceramic vase with a unique glaze, perfect for home decoration.",
    "price": 49.99,
    "rating": 4.7,
    "Customisation": "no",
    "processing_time": "1-2 weeks",
    "stock_status": "Limited Stock",
    "user_email": "jane.smith@example.com",
    "user_name": "Jane Smith",
    "imageURL": "https://example.com/images/ceramic-vase.jpg"
}

 */