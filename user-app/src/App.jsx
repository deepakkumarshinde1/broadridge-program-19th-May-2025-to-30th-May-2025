import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./components/HomePage";
import Login from "./components/user/Login";
import CreateAccount from "./components/user/CreateAccount";
import Header from "./components/Header";
import { UserContextWrapperComponent } from "./context/user.context";

function App() {
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: (
        <UserContextWrapperComponent>
          <CreateAccount />
        </UserContextWrapperComponent>
      ),
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
