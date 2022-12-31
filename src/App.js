import Login from './Pages/Login';
import Register from './Pages/Register';
import Lead from './Pages/Lead';
import LeadAttribute from './Pages/LeadAttribute';
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
      path: "/lead",
      element: <Lead />
    },
    {
      path: "/leadattribute",
      element: <LeadAttribute />
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App