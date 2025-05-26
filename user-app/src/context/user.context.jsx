import { createContext, useContext, useState } from "react";

let UserContext = createContext({});

// custom hook to get access of context to the component
export function useUserContext() {
  return useContext(UserContext);
}

export function UserContextWrapperComponent(props) {
  let [showPassword, setShowPassword] = useState(false);
  let [newUser, setNewUser] = useState({
    email: "",
    password: "",
  });

  let [error, setError] = useState({});

  let handelChange = (event) => {
    let { value, name } = event.target;
    setNewUser({ ...newUser, [name]: value });
  };

  let saveUser = (event) => {
    event.preventDefault();
    if (validation()) {
      return;
    }
  };

  let validation = () => {
    let _error = {};
    let isError = false;
    if (newUser.email.trim().length === 0) {
      _error["email"] = "Email Required";
      isError = true;
    }
    let passwordRegx = /^[0-9]{4}$/;
    let isValid = passwordRegx.test(newUser.password.trim());

    if (newUser.password.trim().length === 0) {
      _error["password"] = "Password Required";
      isError = true;
    } else if (!isValid) {
      _error["password"] = "Password must be number max length of 4";
      isError = true;
    }

    setError(_error);
    return isError;
  };
  let share = {
    showPassword,
    setShowPassword,
    saveUser,
    newUser,
    handelChange,
    error,
  };
  return (
    <UserContext.Provider value={share}>{props.children}</UserContext.Provider>
  );
}
