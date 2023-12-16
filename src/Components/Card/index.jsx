import React from "react";
import './card.scss'

const Card = (props) => {
  const Icon = props.icon; // Assuming props.icon is a React component

  return (
    <div className="card">
      <div className="card-inner">
        <h3>{props.name}</h3>
        <Icon className="card-icon" /> {/* Rendering the icon component */}
      </div>
      <h1>{props.number}</h1>
    </div>
  );
};

export default Card;
