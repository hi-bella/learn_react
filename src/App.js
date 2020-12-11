import React, { Component } from 'react';
import './App.css';
import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

// class components
class App extends Component {
  state = {
    persons : [
      {id: "1", name:"Bella", age:23},
      {id: "2",name:"Caroline", age:27},
      {id: "3",name:"Margaret", age:31},
    ]
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons //! not good because you actually changing the original state
    const persons = [...this.state.persons] //* instead, make a copy of the state using spread statements
    persons.splice(personIndex, 1)
    this.setState({
      persons: persons,
    })
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id === id;
    })

    const personUpdate = {
      ...this.state.persons[personIndex]
    }

    personUpdate.name = event.target.value

    const persons = [...this.state.persons]
    persons[personIndex] = personUpdate

    this.setState({
      persons : persons
    })
  }

  togglePersonHandler = (event) => {
    const doesShow = this.state.showPerson;
    this.setState({
      showPerson: !doesShow
    })
  }

  render(){
    let persons = null

    const style = {
      border: "black 1px solid",
      padding: "10px",
      color: "white",
      backgroundColor: "green",
      cursor: 'pointer',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black'
      }
    };

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red");
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold");
    }

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person 
              click={() => this.deletePersonHandler(index)} 
              name={person.name} 
              age={person.age} 
              key={person.id}
              change={(event) => this.nameChangedHandler(event, person.id)}
              />
            )
          })}
          </div>
      )
      
      style.backgroundColor = "red";
      style[':hover'] = {
        backgroundColor: 'salmon',
        color: 'black'
      }
    }
    return (
      <StyleRoot>
        <div className="App">
          <h1>Hi, I'm Bella</h1>
          <p className={classes.join(' ')}>Hi this is working</p>
          <button 
            style={style}
            onClick={this.togglePersonHandler}>
              Switch Name
          </button>
          {persons}
            
          
        </div>
        </StyleRoot>
      //React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Does this work now?"))
    );
  } 
}

// functional component using react hooks

export default Radium(App);
