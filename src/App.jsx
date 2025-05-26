import { useState } from "react";
import fetchWeatherData from "./Backend/fetchWeatherData";
import Input from "./frontEnd/Components/Input";
import Location from "./frontEnd/Components/Location";
import Temp from "./frontEnd/Components/Temp";
import Condition from "./frontEnd/Components/Condition";
import "./App.css";

function App() {
  const [location, setLocation] = useState("");
  const [weather, setWeather] = useState({
    location: "",
    temperature: "",
    condition: "",
    error: "",
  });

  const getWeather = async () => {
    setWeather({
      location: "",
      temperature: "",
      condition: "",
      error: "",
    });

    try {
      const data = await fetchWeatherData(location);
      setWeather({
        ...data,
        error: "",
      });
    } catch (error) {
      setWeather({
        location: "",
        temperature: "",
        condition: "",
        error: error.message,
      });
    }
  };

  return (
    <div className="app-container">
      <div className="weather-card">
        <h1 className="title">Weather App</h1>
        <Input
          location={location}
          setLocation={setLocation}
          getWeather={getWeather}
        />
        <Location location={weather.location} />
        <Temp temperature={weather.temperature} />
        <Condition condition={weather.condition} error={weather.error} />
      </div>
    </div>
  );
}

export default App;
