
import "./WeatherForecast.css"
import WeatherIcon from "./WeatherIcon.jsx"
import WeatherData from "./WeatherData.jsx"

function WeatherForecast({ data }) {
    return (
      <div className="weather">
        <WeatherData day={data.day} conditions={data.conditions} time={data.time} />
        <WeatherIcon img={data.img} imgAlt={data.imgAlt} />
      </div>
  );
}

export default WeatherForecast;

