function Condition({ condition, error }) {
  return (
    <div className="weather-info">
      {condition && <p className="condition">{condition}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default Condition;
