import React from 'react'
import classes from './Maincontainer.module.css';

import Workspace from "../WorkSpace/Workspace";
import Animation from "../Animation/Animation";
import LandingSectionImage from "../assets/landing-section-image.png";


export default function Maincontainer() {
    return (
        <div className={classes.Maincontainer}>
        
<Workspace/>
<div className={classes.LandingImageDiv}>
<img src={LandingSectionImage} className={classes.LandingSectionImage}/>
</div>

         <div className={classes.Animation}>
             <Animation/>
         

        </div>



        </div>
    )
}
