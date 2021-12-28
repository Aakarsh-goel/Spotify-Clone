import React from "react";
import { DataLayerContext } from "./DataLayer";
import "./SidebarOption.css";

function SidebarOption({ title, Icon, id,spotify}) {
    const [playlists,dispatch] = React.useContext(DataLayerContext);
  return (
    <div className="sidebar-option" >
      {Icon && <Icon className="sidebar-icon" />}
      {Icon ? <h4>{title} </h4> : <p onClick={()=>{
          console.log("playlist selected is",id)
          dispatch({
            type:"SET_PLAYLIST_ID",
            playlistId: id
          })
           
          spotify.getPlaylist(id).then(response=>{
            dispatch({
              type:"SET_DISCOVER_WEEKLY",
             discoverWeekly: response
            })
          })
          
      }}>{title}</p>}
    </div>
  );
}

export default SidebarOption;
