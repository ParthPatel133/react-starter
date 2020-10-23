import React, { Component } from "react";
import "./App.css";
import person from "./Person/Person";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "parth", age: 22 },
      { name: "tushar", age: 22 },
      { name: "viral", age: 21 },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  switchNameHandler = (newName) => {
    // console.log('clicked');
    // dont't directly update state, react won't allow. instead use this.setState method

    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "bunty", age: 22 },
        { name: "dhruval", age: 21 },
      ],
    });
  };

  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: "parth", age: 22 },
        { name: event.target.value, age: 22 },
        { name: "dhruval", age: 21 },
      ],
    });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Jadiyo!")}
            changed={this.nameChangeHandler}
          />
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, react App</h1>
        <p>this is para inside h1</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Position
          </button>
          {persons}
      </div>
    );
  }
}

export default App;
