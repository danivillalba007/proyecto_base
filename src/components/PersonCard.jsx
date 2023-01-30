import React, { Component } from "react";

class PersonaCard extends Component {
  constructor(props) {
    super(props);
    const { firstName, lastName, age, hairColor } = props;
    this.state = {
      firstName: firstName,
      lastName: lastName,
      age: parseInt(age),
      hairColor: hairColor,
    };
  }

  cumple = () => {
    this.setState({ age: this.state.age + 1 });
    console.log(this.state.age);
  };

  render() {
    const { firstName, lastName, age, hairColor } = this.props;

    return (
      <div>
        <h1>
          {lastName} , {firstName}
        </h1>
        <p>Age: {this.state.age}</p>
        <p>Hair Color: {hairColor}</p>
        <button onClick={this.cumple}>
          Birthday Button For {firstName} {lastName}
        </button>
      </div>
    );
  }
}

export default PersonaCard;
