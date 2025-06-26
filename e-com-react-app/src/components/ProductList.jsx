import { Component, useEffect } from "react";
import { ProductContext, useProductContext } from "../context/product.context";
import ProductItem from "./ProductItem";
import { withProductContentList } from "../hoc/product.context.hoc";

class ProductList extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (this.props.list.length === 0) this.props.getProductList();
  }

  render() {
    return (
      <section className="row">
        <section className="col-12 d-flex flex-wrap m-auto justify-content-center">
          <ProductContext.Consumer>
            {(value) => {
              value.list.map((product) => {
                return <ProductItem product={product} key={product.id} />;
              });
            }}
          </ProductContext.Consumer>
        </section>
      </section>
    );
  }
}

export default withProductContentList(ProductList);
