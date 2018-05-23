import React, {Component} from 'react';

import Person from './Person/Person';

class Persons extends Component {
    render() {
        return this.props.persons.map((person, index) => {
                return <Person name={person.name}
                        age={person.age}
                        key={person.id}
                        changed={(event) => this.props.nameChange(event, person.id)}
                        click={this.props.deletePerson.bind(this, index)} />
                })
    }
}


export default Persons;