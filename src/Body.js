import { FavoriteRounded, MoreHorizRounded, PlayCircleFilled } from "@material-ui/icons";
import React, { useContext } from "react";
import "./Body.css";
import { DataLayerContext } from "./DataLayer";
import Header from "./Header";
import Songrow from "./Songrow";


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

      <div className="body-songs">
          <div className="body-icons">
              <PlayCircleFilled className="body-shuffle"/>
              <FavoriteRounded fontSize="large"/>

              <MoreHorizRounded/>
          </div>
          {discoverWeekly?.discoverWeekly?.tracks.items.map(item=>(
              <Songrow track = {item.track}/>
          ))}
      </div>



    </div>
  );
}

export default Body;
