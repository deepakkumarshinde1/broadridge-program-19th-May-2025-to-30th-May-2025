import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import { UserContextProvider } from "./context/user.context";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/user/Profile";
import { useRef } from "react";

function App() {
  let login = useRef(null);
  let router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "", element: <ProductList /> },
        { path: "product-details/:pid", element: <ProductDetails /> },
        { path: "login", element: <Login /> },
        {
          path: "user",
          element: <ProtectedRoute ref={login} />,
          children: [
            {
              path: "profile",
              element: <Profile />,
            },
          ],
        },
      ],
    },
  ]);
  let handelClick = () => {
    console.log(login);
  };
  return (
    <>
      <button onClick={handelClick}></button>
      <section className="container-fluid">
        <UserContextProvider>
          <RouterProvider router={router} />
        </UserContextProvider>
      </section>
    </>
  );
}

function Layout() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
