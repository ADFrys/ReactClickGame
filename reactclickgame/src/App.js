import React from "react";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import FriendCard from "./components/FriendCard";
import characters from "./characters.json";

const App = () => (
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
      <Title>Clicky Game</Title>
    <FriendCard
      name={characters[0].name}
      image={characters[0].image}
      occupation={characters[0].occupation}
      location={characters[0].location}
    />
    <FriendCard
      name={characters[1].name}
      image={characters[1].image}
      occupation={characters[1].occupation}
      location={characters[1].location}
    />
    <FriendCard
      name={characters[2].name}
      image={characters[2].image}
      occupation={characters[2].occupation}
      location={characters[2].location}
    />
    <FriendCard
      name={characters[3].name}
      image={characters[3].image}
      occupation={characters[3].occupation}
      location={characters[3].location}
    />
    <FriendCard
      name={characters[4].name}
      image={characters[4].image}
      occupation={characters[4].occupation}
      location={characters[4].location}
    />
    <FriendCard
      name={characters[5].name}
      image={characters[5].image}
      occupation={characters[5].occupation}
      location={characters[5].location}
    />
    <FriendCard
      name={characters[6].name}
      image={characters[6].image}
      occupation={characters[6].occupation}
      location={characters[6].location}
    />
     <FriendCard
      name={characters[7].name}
      image={characters[7].image}
      occupation={characters[7].occupation}
      location={characters[7].location}
    />
    <FriendCard
      name={characters[8].name}
      image={characters[8].image}
      occupation={characters[8].occupation}
      location={characters[8].location}
    />
    <FriendCard
      name={characters[9].name}
      image={characters[9].image}
      occupation={characters[9].occupation}
      location={characters[9].location}
    />
    <FriendCard
      name={characters[10].name}
      image={characters[10].image}
      occupation={characters[10].occupation}
      location={characters[10].location}
    />
    <FriendCard
      name={characters[11].name}
      image={characters[11].image}
      occupation={characters[11].occupation}
      location={characters[11].location}
    />
  </Wrapper>
);

export default App;
