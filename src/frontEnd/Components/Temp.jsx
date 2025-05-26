function Temp({ temperature }) {
  return temperature ? <p className="temperature">{temperature}</p> : null;
}

export default Temp;
