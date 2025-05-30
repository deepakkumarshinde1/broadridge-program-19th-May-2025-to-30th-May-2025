import { useEffect } from "react";
import { useProductContext } from "../context/product.context";
import ProductItem from "./ProductItem";

function ProductList() {
  let { list, getProductList } = useProductContext();
  useEffect(() => {
    if (list.length === 0) getProductList();
  }, []);
  return (
    <section className="row">
      <section className="col-12 d-flex flex-wrap m-auto justify-content-center">
        {list.map((product) => {
          return <ProductItem product={product} key={product.id} />;
        })}
      </section>
    </section>
  );
}

export default ProductList;
