import React, { Component } from "react";
import PersonaCard from "./components/PersonCard";

class App extends Component {
  render() {
    return (
      <div>
        <PersonaCard
          firstName="Jane"
          lastName="Doe"
          age={45}
          hairColor="Black"
        ></PersonaCard>
        <PersonaCard
          firstName="John"
          lastName="Smith"
          age={88}
          hairColor="Brown"
        ></PersonaCard>
      </div>
    );
  }
}

export default App;
