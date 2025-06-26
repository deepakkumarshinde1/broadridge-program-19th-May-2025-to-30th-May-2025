import { useProductContext } from "../context/product.context";

export function withProductContentList(Component) {
  return (props) => {
    let { list, getProductList } = useProductContext();
    return <Component {...props} list={list} getProductList={getProductList} />;
  };
}
