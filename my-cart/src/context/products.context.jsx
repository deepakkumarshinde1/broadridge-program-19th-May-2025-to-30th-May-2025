import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { getProductList } from "../service/product.service";

const ProductContext = createContext({});

export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductContextWrapperComponent({ children }) {
  let navigate = useNavigate();
  let [products, setProducts] = useState([]);
  let [cart, setCart] = useState([]);
  let selectedProduct = useRef(null);

  useEffect(() => {
    (async () => {
      let data = await getProductList();
      if (data) {
        setProducts(data);
      }
    })();
  }, []);

  let addToCart = () => {
    if (selectedProduct.current.value !== "") {
      let index = Number(selectedProduct.current.value);
      let newProduct = { name: products[index].name, count: 1 };
      setCart([...cart, newProduct]);
      selectedProduct.current.value = "";
      navigate("/cart");
    }
  };

  let manageCount = (type, index) => {
    let _cart = [...cart];
    if (type === "+") {
      _cart[index].count += 1;
    } else {
      if (_cart[index].count === 1) {
        _cart.splice(index, 1);
      } else {
        _cart[index].count -= 1;
      }
    }
    setCart(_cart);
  };

  let shared = {
    products,
    addToCart,
    selectedProduct,
    cart,
    cartLength: cart.length,
    manageCount,
  };

  return <ProductContext value={shared}>{children}</ProductContext>;
}
