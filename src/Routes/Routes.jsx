import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Registration from "../Pages/Registration/Registration";
import Login from "../Pages/Login/Login";
import AvailableFoods from "../Pages/AvailableFoods/AvailableFoods";
import AddFood from "../Pages/AddFood/AddFood";
import Error from "../Pages/Error/Error";
import MyFood from "../Pages/MyFood/MyFood";
import MyFoodRequest from "../Pages/MyFoodRequest/MyFoodRequest";
import PrivateRoute from "./PrivateRoute";
import FoodDetails from "../Pages/FoodDetails/FoodDetails";
import UpdateFoodModal from "../Pages/MyFood/UpdateFoodModal";
import About from "../Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path:"/about",
        element:<About></About>
      },
      {
        path: "/register",
        element: <Registration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/availableFood",
        element: <AvailableFoods />,
        loader: () => fetch("https://food-station-server.vercel.app/food"),
      },
      {
        path: "/food/:id",
        element:<PrivateRoute> <FoodDetails /> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://food-station-server.vercel.app/food/myfood/${params.id}`,),
      },

      {
        path: "/myFood",
        element: (
          <PrivateRoute>
            <MyFood />
          </PrivateRoute>
        ),
      },
      {
        path: "/foodRequest",
        element: (
          <PrivateRoute>
            <MyFoodRequest />
          </PrivateRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`https://food-station-server.vercel.app/food?email=${params.email}`),
      },
      {
        path: "/updateFoodModal/:id",
        element:<PrivateRoute> <UpdateFoodModal></UpdateFoodModal> </PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://food-station-server.vercel.app/food/myfood/${params.id}`),
      },
      {
        path: "/addFood",
        element: (
          <PrivateRoute>
            <AddFood />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default router;
