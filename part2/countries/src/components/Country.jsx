const Country = ({ country }) => {
  const languages = Object.values(country.languages)

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
      <img src={country.flags.png} width='140' />
    </div>
  )
}

export default Country