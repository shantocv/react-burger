import React, { Component } from 'react';

import './App.css';

import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit'

class App extends Component {
  state = {
    persons: [
      { id: 'qwqw', name: 'Shanto', age: 28 },
      { id: '1232', name: 'Shinto', age: 30 }
    ],
    displayPersons: false
  }

  nameChangedHanler = (event, id) => {
    let personIndex = this.state.persons.findIndex(person => {
      return person.id === id
    })

    let person = { ...this.state.persons[personIndex] }
    person.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = person

    this.setState({
      persons: persons
    })

  }

  toggleHandler = () => {
    const display = this.state.displayPersons
    this.setState({
      displayPersons: !display
    })
  }

  deletePersonHandler = (index) => {
    const persons = [...this.state.persons]
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    let persons = null
    if(this.state.displayPersons){
      persons = <Persons persons={this.state.persons} 
                   nameChange={this.nameChangedHanler} 
                   deletePerson={this.deletePersonHandler} />
      
    }
    return (
      <div className="App">
        <Cockpit toggleHandler={this.toggleHandler} />
        {persons}
      </div>
    );
  }
}

export default App;
