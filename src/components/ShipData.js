import React, { useEffect, useState } from "react";
import spacex from "../api/spacex";

const ShipData = ({ id }) => {
  const [shipData, setShipData] = useState(null);

  useEffect(() => {
    const fetchShipData = async () => {
      const response = await spacex.get(`ships/${id}`);
      setShipData(response.data);
    };

    fetchShipData();
  }, [id]);

  const generateContent = () => {
    const { name, type, home_port, image, year_built } = shipData;
    return (
      <div className="card">
        <div className="image">
          <img src={image} alt={name} />
        </div>
        <div className="content">
          <div className="header">{name}</div>
          <div className="meta">{home_port}</div>
        </div>
        <div className="extra content">
          <span className="left floated">{`Type: ${type}`}</span>
          <span className="right floated">{`Built: ${year_built}`}</span>
        </div>
      </div>
    );
  };

  const contentPlaceholder = () => {
    return (
      <div className="ui card">
        <div className="image">
          <div className="ui placeholder">
            <div className="square image"></div>
          </div>
        </div>
        <div className="content">
          <div className="ui placeholder">
            <div className="header">
              <div className="very short line"></div>
              <div className="medium line"></div>
            </div>
            <div className="paragraph">
              <div className="short line"></div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return !shipData ? contentPlaceholder() : generateContent();
};

export default ShipData;
