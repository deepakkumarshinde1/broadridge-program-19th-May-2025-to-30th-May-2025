import { Outlet } from "react-router-dom";
import Header from "./Header";
import { ProductContextWrapperComponent } from "../context/products.context";

function Layout() {
  console.log("layout re-rending");
  return (
    <>
      <ProductContextWrapperComponent>
        <Header />
        <Outlet />
      </ProductContextWrapperComponent>
    </>
  );
}

export default Layout;
