import axios from "axios";
axios.defaults.baseURL = "http://localhost:3004/";
export async function getProductList() {
  try {
    let { data } = await axios.get("products");
    console.log(data);
    return data;
  } catch (error) {
    alert("error");
    return null;
  }
}
