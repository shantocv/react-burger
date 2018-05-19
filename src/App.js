import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

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
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return <Person name={person.name}
                             age={person.age}
                             key={person.id}
                             changed={(event) => this.nameChangedHanler(event, person.id)}
                             click={this.deletePersonHandler.bind(this, index)} />
            })
          }
        </div>
      )
    }
    return (
      <div className="App">
        <h1>React Burger</h1>
        <button onClick={this.toggleHandler}>Switch Name</button>
        {persons}
      </div>
    );
  }
}

export default App;
