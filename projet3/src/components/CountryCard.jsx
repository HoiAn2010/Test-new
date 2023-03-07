import React from "react";
import "./CountryCard.css";

function CountryCard({ name, flag, capital, region }) {
  return (
    <>
      <div className="card">
        <img src={flag} alt="Avatar" className="w-100" />
        <div className="info-container">
          <div className="info-head">
            <h4>{name}</h4>
          </div>
          <div className="info-body">
            <p>{capital}</p>
          </div>
          <div className="info-footer">
            <p>{region}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CountryCard;
