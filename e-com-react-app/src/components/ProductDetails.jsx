import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductContext } from "../context/product.context";

function ProductDetails() {
  let navigation = useNavigate();
  let { pid } = useParams();
  let { getSingleProductDetails, productDetails, setProductDetails } =
    useProductContext();
  useEffect(() => {
    getSingleProductDetails(pid);
    return () => {
      setProductDetails(null);
    };
  }, []);
  return (
    <>
      {productDetails && (
        <section className="row mt-4">
          <section className="col-4">
            <img
              src={productDetails.image}
              className="card-img-top"
              style={{ width: "80%" }}
            />
          </section>
          <section className="col-8">
            <h5 className=" display-5">
              {productDetails.title} ({productDetails.category})
            </h5>
            <p className="h4">
              <span className="text-decoration-line-through me-2 text-secondary">
                <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                {productDetails.price * 2}
              </span>
              <span className="fw-bold fs-3 text-success">
                <i className="fa fa-inr" aria-hidden="true"></i>{" "}
                {productDetails.price} (50% off)
              </span>
            </p>
            <p className="fs-4">
              <span>
                <i className="fa fa-users me-2" aria-hidden="true"></i>
                {productDetails.rating.count}
                <span className="text-info">
                  <i className="fa fa-star-half-o mx-2" aria-hidden="true"></i>(
                  {productDetails.rating.rate})
                </span>
              </span>
            </p>
            <p className="fs-4">About Product : {productDetails.description}</p>

            <section className="d-flex gap-2">
              <a href="#" className="btn btn-lg btn-primary">
                <i className="fa fa-cart-plus me-2" aria-hidden="true"></i> Add
                Cart
              </a>
              <a href="#" className="btn btn-lg btn-success">
                <i className="fa fa-credit-card me-2" aria-hidden="true"></i>{" "}
                Buy Now
              </a>
            </section>
          </section>
        </section>
      )}
    </>
  );
}

export default ProductDetails;
