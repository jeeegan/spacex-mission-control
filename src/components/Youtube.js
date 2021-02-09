import React from "react";

const Youtube = ({ name, url }) => {
  return (
    <div
      className="ui video"
      style={{
        position: "relative",
        paddingBottom: "56.25%",
        paddingTop: 25,
        height: 0,
      }}
    >
      <iframe
        title={name}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
        src={`https://www.youtube.com/embed/${url}`}
        frameBorder="0"
      />
    </div>
  );
};

export default Youtube;
