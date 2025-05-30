import axios from "axios";

axios.defaults.baseURL = "https://fakestoreapi.com";
export async function getProductList() {
  try {
    let { data } = await axios.get("/products");
    return data;
  } catch (error) {
    return false;
  }
}

export async function getSingleProduct(id) {
  try {
    let { data } = await axios.get("/products/" + id);
    return data;
  } catch (error) {
    return false;
  }
}
