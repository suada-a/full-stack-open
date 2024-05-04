import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [search, setSearch] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {setCountries(response.data)})
  }, [])

  const countriesToShow = countries.filter((country) => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <p>
        find countries <input value={search} onChange={({ target }) => setSearch(target.value)} />
      </p>
      <Countries countries={countriesToShow} showCountry={setSearch} />
    </div>
  )
}

export default App