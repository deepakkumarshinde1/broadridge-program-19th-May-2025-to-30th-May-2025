import { memo, useEffect } from "react";
import Swal from "sweetalert2";

function WeatherDetails(props) {
  let { weatherDetails } = props;
  console.log("init");

  useEffect(() => {
    console.log("mounting");

    return () => {
      console.log("unmounting");
    };
  }, []);

  useEffect(() => {
    Swal.fire({
      title: "New City Found",
      text: "here are details",
      icon: "success",
      timer: 2000,
    });
  }, [weatherDetails]);

  return (
    <>
      {console.log("render")}
      <div style={{ border: "1px solid black" }}>
        <h1>{weatherDetails.name}</h1>
        <p>
          {weatherDetails.main?.temp} <sup>o</sup>C
        </p>
        <p>{weatherDetails.weather[0].main}</p>
        <img
          src={`http://openweathermap.org/img/w/${weatherDetails.weather[0].icon}.png`}
          alt={`${weatherDetails.name} has ${weatherDetails.weather[0].main}`}
        />
      </div>
    </>
  );
}

export default memo(WeatherDetails);

// [] => prop/state

// [] => once
// [props/state] => multi

// memory => component => memo (HOC)
// value => useMemo
// function => useCallback
