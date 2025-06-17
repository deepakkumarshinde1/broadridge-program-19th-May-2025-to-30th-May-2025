import { useNavigate } from "react-router-dom";
import { getProductList, getSingleProduct } from "../service/product.service";

import { createContext, useContext, useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

let ProductContext = createContext({});
export function useProductContext() {
  return useContext(ProductContext);
}

export function ProductContextProvider({ children }) {
  let [list, setList] = useState([]);
  let [productDetails, setProductDetails] = useState(null);
  let navigate = useNavigate();
  let {
    data: result,
    error,
    isLoading,
    refetch: getProducts,
  } = useQuery({
    queryKey: ["product"],
    queryFn: getProductList,
    enabled: false,
  });

  useEffect(() => {
    if (result) {
      let newResult = result.sort((a, b) => {
        let _a = a.category.toLowerCase();
        let _b = b.category.toLowerCase();
        if (_a < _b) return -1;
        if (_a > _b) return 1;
        return 0;
      });
      setList(newResult);
    }
  }, [result]);
  let getSingleProductDetails = async (id) => {
    let details = await getSingleProduct(id);
    if (details) {
      setProductDetails(details);
    } else {
      setProductDetails(null);
      alert("product not found");
      navigate("/");
    }
  };
  let shared = {
    list,
    productDetails,
    getSingleProductDetails,
    getProductList: getProducts,
    setProductDetails,
  };
  return (
    <ProductContext.Provider value={shared}>
      {children}{" "}
    </ProductContext.Provider>
  );
}
