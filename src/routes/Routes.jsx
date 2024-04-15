import { createBrowserRouter } from 'react-router-dom';
import ErrorPage from '../components/errorpage/ErrorPage'
import Root from '../layouts/Root';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import UpdateProfile from '../pages/Profile/UpdateProfile';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<ErrorPage></ErrorPage>,
      children: [
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<Login></Login>
        },
        {
            path:"/register",
            element:<Register></Register>
        },
        {
          path:"update-profile",
          element:<UpdateProfile></UpdateProfile>
        }
      ]
    },
  ]);

export default router;