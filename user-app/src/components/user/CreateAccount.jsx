import { Link } from "react-router-dom";
import InputError from "./InputError";
import { useUserContext } from "../../context/user.context";
import { useEffect } from "react";

function CreateAccount() {
  let {
    showPassword,
    setShowPassword,
    saveUser,
    newUser,
    handelChange,
    error,
  } = useUserContext();
  useEffect(() => {
    return () => {
      setShowPassword(false);
    };
  }, []);
  return (
    <>
      <section className="container-fluid">
        <section className="row">
          <section className="col-lg-4 col-6 mx-auto mt-5">
            <h3 className="text-center">Create an Account</h3>
            <form className="card p-4 " onSubmit={saveUser}>
              <div className="mb-3">
                <label htmlFor="userName" className="form-label">
                  Email address
                </label>
                <input
                  value={newUser.email}
                  type="email"
                  className="form-control"
                  id="userName"
                  onChange={handelChange}
                  name="email"
                />
                {error.email && <InputError error={error.email} />}
              </div>
              <div className="mb-1">
                <label htmlFor="userPassword" className="form-label">
                  Password
                </label>
                <input
                  value={newUser.password}
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  id="userPassword"
                  onChange={handelChange}
                  name="password"
                />
                {error.password && <InputError error={error.password} />}
              </div>
              <section className="form-check mb-3">
                <input
                  id="password_checkbox"
                  type="checkbox"
                  className="form-check-input"
                  onChange={() => setShowPassword(!showPassword)}
                  checked={showPassword}
                />
                <label htmlFor="password_checkbox" className="form-check-label">
                  {showPassword ? "Hide" : "Show"} password
                </label>
              </section>
              <section className="gap-3 d-flex justify-content-center">
                <button type="submit" className="btn btn-primary px-5">
                  <i className="fa fa-save me-2"></i>
                  Create
                </button>
                <Link to="/" type="button" className="btn btn-danger">
                  <i className="fa fa-times" aria-hidden="true"></i> Cancel
                </Link>
              </section>
              <section>
                <p className="p-2 mb-0 mt-2 text-center">
                  Have an account ?
                  <Link to="/login" className="ms-2">
                    Sign In
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

export default CreateAccount;
