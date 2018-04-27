import React from "react";
import "./FriendCard.css";


const FriendCard = props => {


// Attempted to create a click function that passes in props.clicked and sets the property to that image to true

 // const click = (props) => {
 //    this.setState({ this.props.clicked: true});
 //  };

return (

  <div className="card">
    <div className="img-container">
      <img onClick={() => props.clicked(props)} id={props.name} src={require("../../images/" + props.image)} />
    </div>
    <div className="content">

    </div>
  </div>
);
}


export default FriendCard;
