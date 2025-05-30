import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import ProductDetails from "./components/ProductDetails";
import Login from "./components/Login";
import { UserContextProvider } from "./context/user.context";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/user/Profile";

function App() {
  return (
    <>
      <section className="container-fluid">
        <UserContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/product-details/:pid" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/user" element={<ProtectedRoute />}>
              <Route path="profile" element={<Profile />} />
            </Route>
          </Routes>
        </UserContextProvider>
      </section>
    </>
  );
}

export default App;
