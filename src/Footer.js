import React from 'react'
import "./Footer.css"
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline"
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious"
import SkipNextIcon from "@material-ui/icons/SkipNext"
import ShuffleIcon from "@material-ui/icons/Shuffle"
import RepeatIcon from "@material-ui/icons/Repeat"
import { Grid,Slider } from '@material-ui/core'

function Footer() {
    return (
        <div className="footer">
          
          <div className="footer-left">
            Album and song details
          </div>

          <div className="footer-center">
                <ShuffleIcon className="footer-green"/>
                <SkipPreviousIcon className="footer-icon"/>
                <PlayCircleOutlineIcon fontSize="large" className="footer-icon"/>
                <SkipNextIcon className="footer-icon"/>
                <RepeatIcon  className="footer-green"/>
          </div>

          <div className="footer-right">
                Volume control
          </div>
        </div>
    )
}

export default Footer
