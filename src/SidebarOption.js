import React from "react";
import "./SidebarOption.css";

function SidebarOption({ title, Icon }) {
  return (
    <div className="sidebar-option" onClick={console.log("playlist selected is",title)}>
      {Icon && <Icon className="sidebar-icon" />}
      {Icon ? <h4>{title} </h4> : <p >{title}</p>}
    </div>
  );
}

export default SidebarOption;
