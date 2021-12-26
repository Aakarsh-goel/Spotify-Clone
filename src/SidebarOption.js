import React from 'react';
import "./SidebarOption.css"

function SidebarOption({title, Icon}) {
    return (
        <div className="sidebar-option">
        <p>{title}</p>            
        </div>
    )
}

export default SidebarOption
