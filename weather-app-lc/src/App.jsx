import { useState } from "react";
import Input from "./components/Input";
import WeatherDetails from "./components/WeatherDetails";
import WeatherHistory from "./components/WeatherHistory";

function App() {
  let [cityName, setCityName] = useState("");
  let [history, setHistory] = useState([]);
  let [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <>
      <Input
        setHistory={setHistory}
        setWeatherDetails={setWeatherDetails}
        cityName={cityName}
        setCityName={setCityName}
        history={history}
      />
      {weatherDetails && <WeatherDetails weatherDetails={weatherDetails} />}
      <WeatherHistory history={history} />
    </>
  );
}

export default App;
