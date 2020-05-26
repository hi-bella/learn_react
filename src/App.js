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

  switchNameHandler = (newName) => {
    this.setState({
      persons : [
        {name:newName, age:23},
        {name:"Caroline", age:27},
        {name:"Margaret", age:32},
      ],
      showPerson: false,
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
            <Person 
              name={this.state.persons[0].name} 
              age={this.state.persons[0].age}
              click={this.switchNameHandler.bind(this, "Maximilian")} />
            <Person 
              name={this.state.persons[1].name} 
              age={this.state.persons[1].age}
              click={this.switchNameHandler.bind(this, "Nunu")}
              change={this.nameChangedHandler}>
              My Hobbies: Reading
            </Person>
            <Person 
              name={this.state.persons[2].name} 
              age={this.state.persons[2].age} />
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
