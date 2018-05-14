import React from 'react';
import './Person.css'

const person = ({name, age, click, changed, children}) => {
  return(
    <div className='person'>
      <p onClick={click}> My name is {name} and i am {age} years old. {children} </p>
      <input type="text" onChange={changed} value={name} />
    </div>
  )
};

export default person;
