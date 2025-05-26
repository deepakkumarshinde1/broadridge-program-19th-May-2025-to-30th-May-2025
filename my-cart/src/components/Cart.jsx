import { useProductContext } from "../context/products.context";

function Cart() {
  let { cart, manageCount } = useProductContext();
  return (
    <>
      <ul>
        {cart.map((product, index) => {
          return (
            <li key={index}>
              {product.name}{" "}
              <section>
                <button onClick={() => manageCount("+", index)}>+</button>
                {product.count}
                <button onClick={() => manageCount("-", index)}>-</button>
              </section>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Cart;
