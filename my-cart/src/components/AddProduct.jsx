import { Link } from "react-router-dom";
import { useProductContext } from "../context/products.context";

function AddProduct() {
  let { products, addToCart, selectedProduct } = useProductContext();

  return (
    <>
      <form action="#">
        <section>
          <label htmlFor="product_name">Product Name</label>
          <select name="" id="product_name" ref={selectedProduct}>
            <option value="">---Select----</option>
            {products.map((product, index) => {
              return (
                <option value={index} key={index}>
                  {product.name} ({product.stock})
                </option>
              );
            })}
          </select>
        </section>
        <button type="button" onClick={addToCart}>
          Add product
        </button>
      </form>
    </>
  );
}

export default AddProduct;
