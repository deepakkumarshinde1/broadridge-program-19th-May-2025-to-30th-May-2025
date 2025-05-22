import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "bdb836c57d92f37eae457e6880869482";
axios.defaults.baseURL = "https://api.openweathermap.org/data/2.5/";
const UNITS = "metric";
function Input(props) {
  let navigate = useNavigate();
  let { setHistory, setWeatherDetails, cityName, setCityName, history } = props;
  let inputHandel = (event) => {
    setCityName(event.target.value);
  };

  let getWeatherDetails = async (url) => {
    try {
      let url = `weather?q=${cityName}&appid=${API_KEY}&units=${UNITS}`;
      let { data } = await axios.get(url);
      if (data.cod !== 200) {
        throw new Error("City not found");
      }
      //   let newHistory = [...history];
      //   newHistory.unshift(data);
      setHistory([data, ...history]);
      setWeatherDetails(data);
      navigate("/wether-details");
    } catch (error) {
      alert(error);
      setWeatherDetails(null);
    }
  };

  return (
    <>
      <section>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          placeholder="Enter city"
          value={cityName}
          onChange={inputHandel}
        />
      </section>
      <section>
        <button type="button" onClick={getWeatherDetails}>
          Search
        </button>
      </section>
    </>
  );
}

export default Input;

// add=> push (end) , unshift (start) splice(index,0,data)
// remove => pop (end) , shift (start) splice(index,1,data)
