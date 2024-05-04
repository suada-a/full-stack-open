const Weather = ({ weather }) => {
  const weatherIcon = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`

  return (
    <div>
      <h4>Weather in {weather.name}</h4>
      <p>temperature {weather.main.temp} Celcius</p>
      <img src={weatherIcon} width={80}/>
      <p>wind {weather.wind.speed} m/s</p>
    </div>
  )
}
export default Weather