import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters: characters
  };

// The app kept breaking, so I will pseudocode
// Add State for score and top score
// Create a function to shuffle the images on the screen
// Create a function that increases the score (setState) when an image is clicked and calls the function to shuffle the images
// The function will set the score to zero initially, then it will increase to 1 point if the user clicks on a card
// If the user's clicks on the same image, then the score will go back to zero
// but the score will be saved in highest score if it is higher than the current highest score


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
  <div className="container characters">
        {this.state.characters.map(character => (
          <FriendCard
            id={character.id}
            key={character.id}
            name={character.name}
            image={character.image}
            clicked={character.clicked}
          />
        ))}
        </div>

      </Wrapper>
    );
  }
  }


export default App;
