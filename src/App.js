import Account from './Pages/Account';
import Lead from './Pages/Lead';
import LeadAttribute from './Pages/LeadAttribute';
import Login from './Pages/Login';
import Otp from './Pages/Otp';
import Register from './Pages/Register';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/register",
      element: <Register />
    },
    {
      path: "/otp",
      element: <Otp />
    },
    {
      path: "/account",
      element: <Account />
    },
    {
      path: "/lead",
      element: <Lead />
    },
    {
      path: "/leadstructure",
      element: <LeadAttribute />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App