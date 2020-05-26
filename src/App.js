import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

// class components
class App extends Component {
  state = {
    persons : [
      {name:"Bella", age:23},
      {name:"Caroline", age:27},
      {name:"Margaret", age:31},
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

  nameChangedHandler = (event) => {
    this.setState({
      persons : [
        {name:"Max", age:23},
        {name:event.target.value, age:27},
        {name:"Margaret", age:31},
      ]
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

    if (this.state.showPerson){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person name={person.name} age={person.age} click={() => this.deletePersonHandler(index)}  />
            )
          })}
          </div>
      )
    }
    return (
      <div className="App">
        <h1>Hi, I'm Bella</h1>
        <button onClick={this.togglePersonHandler}>Switch Name</button>
        {persons}
          
        
      </div>
      //React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Does this work now?"))
    );
  } 
}

// functional component using react hooks

export default App;
