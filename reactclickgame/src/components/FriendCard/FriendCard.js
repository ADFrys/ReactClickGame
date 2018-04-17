import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={require("../../images/" + props.image)} />
    </div>
    <div className="content">

    </div>
  </div>
);

export default FriendCard;
