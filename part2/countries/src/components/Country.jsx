import { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = ({ country }) => {
  const languages = Object.values(country.languages)
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const apiKey = import.meta.env.VITE_SOME_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`
    axios
      .get(url)
      .then(({ data }) => setWeather(data))
  }, [])

  if (!weather) {
    return null
  }

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h4>languages:</h4>
      <ul>
        {languages.map(language =>
          <li key={language}>{language}</li>
        )}
      </ul>
      <img src={country.flags.png} width='200' />
      <Weather weather={weather}/>
    </div>
  )
}

export default Country