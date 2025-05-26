import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <section className="row">
        <section className="col-12 d-flex gap-3 py-3 align-items-center header-shadow">
          <span className="h3 text-primary">UBlogs</span>
          <nav className="d-flex w-100 justify-content-between pe-4 align-items-center">
            <ul className="list-unstyled d-flex gap-3 mb-0 menu">
              <li>
                <NavLink to={"/"}>Home</NavLink>
              </li>
              <li>
                <NavLink to={"/about"}>About</NavLink>
              </li>
              <li>
                <NavLink to={"/contact"}>Contact</NavLink>
              </li>
            </ul>
            <ul className="list-unstyled d-flex mb-0 gap-3">
              <li>
                <Link
                  to="/login"
                  className="btn btn-outline-info rounded-0 btn-sm"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  to="sign-up"
                  className="btn btn-outline-primary rounded-0 btn-sm"
                >
                  Create Account
                </Link>
              </li>
            </ul>
          </nav>
        </section>
      </section>
    </>
  );
}

export default Header;
