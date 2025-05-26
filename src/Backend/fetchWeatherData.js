const API_KEY = "21683c0a6fb7459cbe4115145251004";
const API_BASE_URL = "http://api.weatherapi.com/v1/current.json";

const fetchWeatherData = async (location) => {
  if (!location.trim()) {
    throw new Error("Please enter a location!");
  }

  const url = `${API_BASE_URL}?key=${API_KEY}&q=${location}&aqi=yes`;

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error("Location not found or API error");
  }

  const data = await response.json();
  return {
    location: `${data.location.name}, ${data.location.country}`,
    temperature: `Temperature: ${data.current.temp_c}°C`,
    condition: `Condition: ${data.current.condition.text}`,
  };
};

export default fetchWeatherData;
