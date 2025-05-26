import { NavLink } from "react-router-dom";
import { useProductContext } from "../context/products.context";
import { memo } from "react";

function Header() {
  let { cartLength } = useProductContext();
  console.log("rendering");
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Add Product</NavLink>
        </li>
        <li>
          <NavLink to={"/cart"}>Cart {cartLength}</NavLink>
        </li>
      </ul>
    </>
  );
}

export default memo(Header);
