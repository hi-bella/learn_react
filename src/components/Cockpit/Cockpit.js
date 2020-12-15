import React from 'react';
import classes from './cockpit.module.css'

const cockpit = (props) => {
    let btnClass = '';
    const assignClasses = [];

    if (props.persons.length <= 2) {
        assignClasses.push(classes.red);
    }
    if (props.persons.length <= 1) {
        assignClasses.push(classes.bold);
    }

    if (props.showPersons) {
        btnClass = classes.Red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignClasses.join(' ')}>Hi this is working</p>
            <button className={btnClass} onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    )
}

export default cockpit;