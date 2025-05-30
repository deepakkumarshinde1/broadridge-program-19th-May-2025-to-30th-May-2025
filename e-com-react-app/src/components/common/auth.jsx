import { jwtDecode } from "jwt-decode";
export const getLoginDetails = () => {
  let token = localStorage.getItem("l_token");
  if (token === null) {
    return false;
  }
  try {
    let result = jwtDecode(token);
    return result;
  } catch (error) {
    return false;
  }
};
