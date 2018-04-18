import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json";


class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    characters
  };



  clickedCard = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const characters = this.state.characters.filter(character => character.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ characters });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
  <div className="container">
    <div className="panel panel-default">
      <div className="panel-heading">
      </div>
    <div className="panel-body">
      Simpsons Clicky Game
    </div>

        <div className="jumbotron">
      <h1>Instructions</h1>
      <p>Click on an image to earn points, but don't click on any more than once! </p>
      <p>Score: 0 | Top Score: 0</p>
      </div>
    </div>
  </div>
        <Title>Game Time!</Title>
        {this.state.characters.map(character => (
          <FriendCard
            removeFriend={this.removeFriend}
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
