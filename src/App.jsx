import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Backend from './components/Backend';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// const BASE_APP =  import.meta.env.VITE_BASE_APP;


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: <Backend />,
    children: [
      {
        path: 'users',
        element: <Users />,
      },
      {
        index: true,
        element: <Dashboard />, 
      },
    ],
  },
]);


function App() {

  return <RouterProvider router={router} />
}


export default App;
