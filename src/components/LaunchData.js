import React from "react";

const LaunchData = (props) => {
  const { name, date_utc, details } = props;
  const patchImg = props.links.patch.small;

  return (
    <div className="ui items">
      <div className="item">
        <span className="ui small image">
          <img src={patchImg} alt={name} />
        </span>
        <div className="content">
          <h1 className="header">{name}</h1>
          <div className="description">
            <p>{details}</p>
          </div>
          <div className="extra">{`Mission Date: ${date_utc.slice(
            0,
            10
          )}`}</div>
        </div>
      </div>
    </div>
  );
};

export default LaunchData;
