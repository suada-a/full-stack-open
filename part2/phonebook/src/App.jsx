import { useState, useEffect } from 'react'
import personService from './services/person'
import Persons from './components/Persons'
import PersonsForm from './components/PersonsForm'
import Notification from './components/Notification'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [info, setInfo] = useState({ message: null })

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
    
    const person = persons.find(p => p.name === newName)
    
    if (person) {
      updatePerson(person)
    } else {
      personService
        .create(personObject)
        .then(returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
          setInfo({ 
            message: `Added ${newName}`,
            type: 'success'
          })
          setTimeout(() => {
            setInfo({ message: null })
          }, 5000)
      })
    }
  }

  const updatePerson = (person) => {
    const confirmUpdate = window.confirm(`${newName} is already added to the phonebook, replace the old number with a new one?`)
    
    if (confirmUpdate) {
      personService
        .update(person.id, {...person, number: newNumber})
        .then(updatedPerson => {
          setPersons(persons.map(p => p.id !== person.id ? p : updatedPerson))
          setInfo({ 
            message: `Updated ${newName}'s phone number`,
            type: 'success'
          })
          setTimeout(() => {
            setInfo({ message: null })
          }, 5000)
        })
        .catch(error => {
          setInfo({message: `Information of ${newName} has already been removed from the server`, type: 'error'})
          setTimeout(() => {
            setInfo({ message: null })
          }, 5000)
          setPersons(persons.filter(p => p.id !== person.id))
        })

        setNewName('')
        setNewNumber('') 
    }
  }

  const removePerson = (person) => {
    const confirmRemoval = window.confirm(`Delete ${person.name}?`)

    if (confirmRemoval) {
      personService
        .remove(person.id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== person.id))
          setInfo({ 
            message: `Deleted ${person.name} from phonebook`,
            type: 'success'
          })
          setTimeout(() => {
            setInfo({ message: null })
          }, 5000)
        })
        .catch(error => {
          setInfo({message: `Information of ${person.name} has already been removed from the server`, type: 'error'})
          setTimeout(() => {
            setInfo({ message: null })
          }, 5000)
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
      <Notification message={info.message} type={info.type}/>
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
        <Persons 
          persons={peopleToShow} 
          removePerson={removePerson}
        />
      </div>
    </div>
  )
}

export default App