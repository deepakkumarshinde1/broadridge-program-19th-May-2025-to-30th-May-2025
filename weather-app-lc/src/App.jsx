import { useState } from "react";
import Input from "./components/Input";
import WeatherDetails from "./components/WeatherDetails";
import WeatherHistory from "./components/WeatherHistory";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Default from "./components/projects/Default";
import ProjectDetails from "./components/projects/ProjectDetails";
import Layout from "./components/Layout";

function App() {
  let [cityName, setCityName] = useState("");
  let [history, setHistory] = useState([]);
  let [weatherDetails, setWeatherDetails] = useState(null);

  let routes = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: (
            <Input
              setHistory={setHistory}
              setWeatherDetails={setWeatherDetails}
              cityName={cityName}
              setCityName={setCityName}
              history={history}
            />
          ),
        },
        {
          path: "wether-details",
          element: weatherDetails && (
            <WeatherDetails weatherDetails={weatherDetails} />
          ),
        },
        {
          path: "weather-history",
          element:
            history.length > 0 ? (
              <WeatherHistory
                history={history}
                setWeatherDetails={setWeatherDetails}
                setHistory={setHistory}
              />
            ) : null,
        },
        {
          path: "projects",
          element: <Project />,
          children: [
            {
              path: "",
              element: <Default />,
            },
            {
              path: ":lang",
              element: <ProjectDetails />,
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to="/" replace />,
    },
  ]);
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
}

export default App;
