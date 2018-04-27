import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json";


class App extends Component {
  state = {
    characters: characters,
    score: 0,
    cardsPicked: [],
    highScore: 0
  };

// The app kept breaking, so I will pseudocode
// Add State for score and top score
// Create a function to shuffle the images on the screen
// Create a function that increases the score (setState) when an image is clicked and calls the function to shuffle the images
// The function will set the score to zero initially, then it will increase to 1 point if the user clicks on a card
// If the user's clicks on the same image, then the score will go back to zero
// but the score will be saved in highest score if it is higher than the current highest score
  shuffleImages = () => {
    let a = this.state.characters;
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    this.setState({characters: a})
  }

  friendClicked = (e) => {
    for(let i = 0; i < this.state.cardsPicked.length; i++) {
      if(this.state.cardsPicked[i] == e.name) {
        if(this.state.score > this.state.highScore) {
          this.setState({highScore: this.state.score})
        }
        this.setState({score: 0})
        return
      }
    }
    this.state.cardsPicked.push(e.name)
    this.setState({score: this.state.score + 1})
    this.shuffleImages();
  }

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
      <p>Score: {this.state.score} | Top Score: {this.state.highScore}</p>
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
            clicked={this.friendClicked}
          />
        ))}
        </div>

      </Wrapper>
    );
  }
  }


export default App;
