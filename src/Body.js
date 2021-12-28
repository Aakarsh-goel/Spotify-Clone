import { FavoriteRounded, MoreHorizRounded, PlayCircleFilled } from "@material-ui/icons";
import React, { useContext } from "react";
import "./Body.css";
import { DataLayerContext } from "./DataLayer";
import Header from "./Header";
import Songrow from "./Songrow";


function Body({ spotify }) {
    const [discoverWeekly,dispatch] = useContext(DataLayerContext)
    console.log("discoverWeekly",discoverWeekly)
    const playPlaylist = (id) => {
        console.log("in play playlist",id)
        spotify
          .play({
            context_uri: `spotify:playlist:6RTbuRKCEZPsqrsAki6yg4`,
          })
          .then((res) => {
              console.log("response whenplay",res)
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
    
      const playSong = (id) => {
        console.log("in play song",id)
        spotify
          .play({
            uris: [`spotify:track:${id}`],
          })
          .then((res) => {
              console.log("res----->",res)
            spotify.getMyCurrentPlayingTrack().then((r) => {
              dispatch({
                type: "SET_ITEM",
                item: r.item,
              });
              dispatch({
                type: "SET_PLAYING",
                playing: true,
              });
            });
          });
      };
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
              <PlayCircleFilled className="body-shuffle" onClick={playPlaylist}/>
              <FavoriteRounded fontSize="large"/>

              <MoreHorizRounded/>
          </div>
          {discoverWeekly?.discoverWeekly?.tracks.items.map(item=>(
              <Songrow playSong={playSong} track = {item.track}/>
          ))}
      </div>



    </div>
  );
}

export default Body;
