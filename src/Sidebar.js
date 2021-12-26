import React from 'react'
import "./Sidebar.css"
import SidebarOption from './SidebarOption'

function Sidebar() {
    return (
        <div className="sidebar">  
            <img className="sidebar-logo" src = "https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg" alt="sidebar image"/>
            <SidebarOption title="Home"/>
            <SidebarOption title="Playlists"/>
        </div>
      
    )
}

export default Sidebar
