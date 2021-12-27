import React, { useContext } from 'react'
import "./Header.css"
import SearchIcon from '@material-ui/icons/Search'
import { Avatar } from '@material-ui/core'
import { DataLayerContext } from './DataLayer'

function Header() {
    const [{user},dispatch] = useContext(DataLayerContext)
    console.log("use for header is" ,user)
    return (
        <div className='header'> 

       <div className="header-left">
        <SearchIcon/>
        <input
        placeholder="Search for songs, artists, playlists and what not"
        type='text'/>
       </div>

        <div className="header-right">
            <Avatar src = {user?.images[0]?.url} alt="AG"/>
            <h4>{user?.display_name}</h4>

        </div>
            
        </div>
    )
}

export default Header
