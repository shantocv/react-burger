import React, { Component } from 'react';
import './App.css';

import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Shanto', age: 28 },
      { name: 'Shinto', age: 30 }
    ]
  }

  switchNameHandler = (message) => {
    console.log(message);
  }

  nameChangedHanler = (event) => {
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Shinto', age: 30 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1>React Burger</h1>
        <button onClick={this.switchNameHandler.bind(this,'App')}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} click={this.switchNameHandler.bind(this,'Person')} changed={this.nameChangedHanler} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this,'Person')} changed={this.nameChangedHanler} > My hobby is reading </Person>
      </div>
    );
  }
}

export default App;
