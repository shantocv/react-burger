import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './Person.css';

class Person extends Component {
  render(){
    return(
      <div className='person'>
        <p onClick={this.props.click}> My name is {this.props.name} and i am {this.props.age} years old. {this.props.children} </p>
        <input type="text" onChange={this.props.changed} value={this.props.name} />
      </div>
    )
  }
}

Person.propTypes = {
  click: PropTypes.func,
  changed: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default Person;
