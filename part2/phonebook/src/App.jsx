import { useState, useEffect } from 'react'
import personService from './services/person'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber,
    }
      
    if (persons.some(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {

      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
      })
    }
  }

  const removePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
        })
      }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }
  
  const peopleToShow = setFilter.length === 0
    ? persons
    : persons.filter((person) => person.name.toLowerCase().includes(filter))
    
  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with<input value={filter} onChange={handleFilterChange}/>
      </div>
      <h3>Add a new</h3>
      <PersonsForm 
        addPerson={addPerson} 
        newName={newName} 
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h3>Numbers</h3>
      <div>
        <Persons 
          persons={peopleToShow} 
          removePerson={removePerson}
        />
      </div>
    </div>
  )
}

export default App