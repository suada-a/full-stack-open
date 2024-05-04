import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://studies.cs.helsinki.fi/restcountries/api/all')
      .then(response => {setCountries(response.data)})
  }, [])

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
 
  const countriesToShow = countries.filter((country) => country.name.common.toLowerCase().includes(filter))

  return (
    <div>
      <p>
        find countries<input value={filter} onChange={handleFilterChange}/>
      </p>
      <Countries countries={countriesToShow} filter={filter} />
    </div>
  )
}

export default App