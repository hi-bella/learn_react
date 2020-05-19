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

  switchNameHandler = () => {
    this.setState({
      persons : [
        {name:"Bellaaaaa", age:23},
        {name:"Caroline", age:27},
        {name:"Margaret", age:32},
      ]
    })
  }

  render(){
    return (
      <div className="App">
        <h1>Hi, I'm Bella</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Reading</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
      //React.createElement("div", {className: 'App'}, React.createElement("h1", null, "Does this work now?"))
    );
  } 
}

// functional component using react hooks

export default App;
