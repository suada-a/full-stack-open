import Country from "./Country"
const Countries = ({ countries, showCountry }) => {
  if (countries.length > 10) {
    return <p>Too many matches, specify another filter</p>
  } else if (countries.length === 1) {
    return <Country country={countries[0]}/>
  }

  return (
    <div>
      {countries.map(country => 
        <p key={country.name.common}>
          {country.name.common}
          <button onClick={() => showCountry(country.name.common)}>show</button>
        </p>
      )}
    </div>
  )
}

export default Countries