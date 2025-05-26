import { Link } from "react-router-dom";

function Login() {
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-4 col-6 mx-auto mt-5">
            <h3 className="text-center">Login</h3>
            <form className="card p-4 ">
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Email address
                </label>
                <input type="email" className="form-control" id="userName" />
              </div>
              <div className="mb-3">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="userPassword"
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
              <section>
                <p className="p-2 mb-0 mt-2 text-center">
                  Don't have account ?
                  <Link to="/sign-up" className="ms-2">
                    Create Account
                  </Link>
                </p>
              </section>
            </form>
          </section>
        </section>
      </section>
    </>
  );
}

export default Login;
