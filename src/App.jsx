import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Backend from "./components/Backend";
import Users from "./pages/Users";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// const BASE_APP =  import.meta.env.VITE_BASE_APP;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Backend />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "users",
        element: <Users />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetail />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
