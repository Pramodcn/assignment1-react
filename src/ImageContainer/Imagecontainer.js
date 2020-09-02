import React from 'react'
// import classes from '*.module.css';
import classes from './Imagecontainer.module.css';
import LandingSectionImage from "../assets/landing-section-image.png";

export default function Imagecontainer() {
    return (
        <div className={classes.Imagecontainer}>
            <div className={classes.ImageDiv}>
                
                <img className={classes.LandingSectionImage} src={LandingSectionImage} alt="landing Image"/>
            </div>
        </div>
    )
}
