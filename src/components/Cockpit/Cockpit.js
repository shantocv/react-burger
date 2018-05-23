import React from 'react'
import Aux from '../../hoc/Aux'

const cockpit = (props) => {
    return(
        <Aux>
            <h1>React Burger</h1>
            <button className='app-button' onClick={props.toggleHandler}>Switch Name</button>
        </Aux>
    )
}

export default cockpit;