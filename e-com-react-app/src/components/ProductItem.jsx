import { useNavigate } from "react-router-dom";

function ProductItem({ product }) {
  let navigation = useNavigate();
  return (
    <>
      <div
        className="card p-3 m-4 border-primary border product-item"
        style={{ width: "20%" }}
        onClick={() => navigation("/product-details/" + product.id)}
        title={product.title}
      >
        <img
          src={product.image}
          className="card-img-top"
          style={{ width: "100%", height: "25vh" }}
        />
        <div className="card-body ">
          <h5 className="card-title display-6">
            {product.title.substring(0, 10)}...
          </h5>
          <p className="card-text fs-5">
            Some quick example text to build on the card title and make up the
            bulk of the card’s content.
          </p>
          <p className="h5">
            <span className="text-decoration-line-through me-2 text-secondary">
              <i className="fa fa-inr" aria-hidden="true"></i>{" "}
              {product.price * 2}
            </span>
            <span className="fw-bold fs-4 text-success">
              <i className="fa fa-inr" aria-hidden="true"></i> {product.price}
              (50% off)
            </span>
          </p>
          <button className="btn btn-lg btn-primary">
            <i className="fa fa-cart-plus me-2" aria-hidden="true"></i> Add Cart
          </button>
        </div>
      </div>
    </>
  );
}

export default ProductItem;
