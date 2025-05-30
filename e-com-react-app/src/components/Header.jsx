import { Link, useNavigate } from "react-router-dom";
import { UserContext, useUserContext } from "../context/user.context";

function Header() {
  let navigate = useNavigate();
  let { user } = useUserContext();
  return (
    <>
      <section className="row">
        <section className="col-12 order-2 border-bottom border-primary">
          <nav className="navbar navbar-expand-lg bg-body-tertiary b">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                P-Cart
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="/">
                      Home
                    </a>
                  </li>
                </ul>

                {user ? (
                  <section className="d-flex gap-3">
                    <div className="dropdown">
                      <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton1"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        {user.given_name}
                      </button>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuButton1"
                      >
                        <li>
                          <Link className="dropdown-item" to="/user/profile">
                            Profile
                          </Link>
                        </li>
                        <li>
                          <button
                            onClick={() => {
                              localStorage.removeItem("l_token");
                              window.location.reload();
                            }}
                            className="dropdown-item"
                            href="#"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                    <img
                      src={user.picture}
                      alt=""
                      style={{
                        borderRadius: "50%",
                        width: "3rem",
                      }}
                    />
                  </section>
                ) : (
                  <section className="d-flex gap-3">
                    <button
                      onClick={() => navigate("/login")}
                      className="btn-sm btn btn-outline-success"
                    >
                      Sign In
                    </button>
                    <button className="btn-sm btn btn-outline-primary">
                      Create Account
                    </button>
                  </section>
                )}
              </div>
            </div>
          </nav>
        </section>
      </section>
    </>
  );
}

export default Header;
