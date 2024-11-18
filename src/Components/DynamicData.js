import React from "react";

function DynamicData(props) {
  return (
    <div className="cards">
      <div className="card">
        <img src={props.imgSrc} alt={props.title} className="card-image" />
        <div className="card-info">
          <h3 className="card-title">{props.title}</h3>
          <p className="card-description">{props.decription}</p>
          <a href={props.link} target="_blank" rel="noopener noreferrer">
            <button className="card-link">Watch Now</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default DynamicData;
