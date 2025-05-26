function Input({ location, setLocation, getWeather }) {
  return (
    <div className="input-container">
      <input
        type="text"
        id="locationInput"
        placeholder="Enter location (e.g., London)"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        className="location-input"
      />
      <button onClick={getWeather} className="weather-button">
        Get Weather
      </button>
    </div>
  );
}

export default Input;
