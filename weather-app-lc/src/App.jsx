import { useState } from "react";
import Input from "./components/Input";
import WeatherDetails from "./components/WeatherDetails";
import WeatherHistory from "./components/WeatherHistory";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Project from "./components/Project";
import Java from "./components/projects/java";
import DotNet from "./components/projects/DotNet";
import Node from "./components/projects/Node.Jsx";
import Default from "./components/projects/Default";
import ProjectDetails from "./components/projects/ProjectDetails";

function App() {
  let [cityName, setCityName] = useState("");
  let [history, setHistory] = useState([]);
  let [weatherDetails, setWeatherDetails] = useState(null);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <Input
              setHistory={setHistory}
              setWeatherDetails={setWeatherDetails}
              cityName={cityName}
              setCityName={setCityName}
              history={history}
            />
          }
        />
        <Route
          path="/wether-details"
          element={
            weatherDetails && <WeatherDetails weatherDetails={weatherDetails} />
          }
        />

        <Route
          path="/weather-history"
          element={
            history.length > 0 ? (
              <WeatherHistory
                history={history}
                setWeatherDetails={setWeatherDetails}
                setHistory={setHistory}
              />
            ) : null
          }
        />
        <Route path="/projects" element={<Project />}>
          <Route path="" element={<Default />} />
          {/* <Route path="java" index={true} element={<Java />} /> */}
          {/* <Route path=".net" element={<DotNet />} /> */}
          {/* <Route path="node" element={<Node />} /> */}
          <Route path=":lang" element={<ProjectDetails />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
