import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { DataLayerContext } from "./DataLayer";

function Sidebar({spotify}) {
  const [playlists, dispatch] = React.useContext(DataLayerContext);

  console.log("playlists are", playlists);
  playlists?.items?.map((playlists) => {});
  return (
    <div className="sidebar">
      <img
        className="sidebar-logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="sidebar image"
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search " />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library " />
      <br />
      <strong className="sidebar-title"> PLAYLISTS </strong>
      <hr />
      
      {playlists?.playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} id={playlist.id} spotify={spotify}/>   
      ))}
       
    </div>
  );
}

export default Sidebar;
