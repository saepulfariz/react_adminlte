import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Users from './pages/Users';
import Content from './components/Content';

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
    element: <Dashboard />,
    children: [
      {
        path: 'users',
        element: <Users />,
      },
      {
        index: true,
        element: <Content />, 
      },
    ],
  },
]);


function App() {

  return <RouterProvider router={router} />
}


export default App;
