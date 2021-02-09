import React, { useEffect, useState } from "react";
import spacex from "../api/spacex";

import Spinner from "./Spinner";
import Youtube from "./Youtube";
import LaunchData from "./LaunchData";
import ShipData from "./ShipData";
import "./App.css";

const App = () => {
  const [launchData, setLaunchData] = useState(null);

  useEffect(() => {
    const fetchLaunchData = async () => {
      const response = await spacex.get("launches/latest");
      setLaunchData(response.data);
    };
    fetchLaunchData();
  }, []);

  const generateContent = () => {
    const { name } = launchData;
    return (
      <>
        <div className="ui fixed inverted main menu">
          <div className="header item">
            <h3>{`${name} Launch Info`}</h3>
          </div>
        </div>
        <div className="ui main container">
          <LaunchData {...launchData} />
          <h2 className="ui header">Watch the launch</h2>
          <Youtube name={name} url={launchData.links.youtube_id} />
          <h2 className="ui header">Ships</h2>
          <div className="ui cards">
            {launchData.ships.map((ship) => (
              <ShipData id={ship} key={ship} />
            ))}
          </div>
        </div>
      </>
    );
  };

  return <>{!launchData ? <Spinner /> : generateContent()}</>;
};

export default App;
