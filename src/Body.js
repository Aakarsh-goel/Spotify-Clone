import React, { useContext } from "react";
import "./Body.css";
import { DataLayerContext } from "./DataLayer";
import Header from "./Header";


function Body({ spotify }) {
    const [discoverWeekly,dispatch] = useContext(DataLayerContext)
    console.log("discoverWeekly",discoverWeekly)
  return (
    <div className="body">
      <Header />
      <div className="body-info">
        <img
          src={discoverWeekly?.discoverWeekly?.images[0]?.url}
          alt="playlist pic"
        />
        <div className="body-info-text">
            <strong>PLAYLIST</strong>
            <h2>{discoverWeekly?.discoverWeekly?.name}</h2>
            <p>{discoverWeekly?.discoverWeekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
