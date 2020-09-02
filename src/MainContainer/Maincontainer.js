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
         {/* <div className={classes.AnimationFlex}>
             <div className={classes.Arrone}>
             <img className={classes.Tick} src={WhiteTick}/>
                 <p className={classes.AnimationName}>Dmm Design</p>
                 <img className={classes.UserImg} src={PinkImg} />
                 <p>20 Dec</p>
                 <div className={classes.ColorPink}></div>

             </div>
             <div className={classes.Arrtwo}>
                 <img className={classes.Tick} src={BlueTick}/>
                 <p className={classes.AnimationName}>Blurr Animation</p>
                 <img className={classes.UserImg} src={OrangeImg} />
                 <p>22 Dec</p>
                 <div className={classes.ColorOrange}></div>
             </div>
             <div className={classes.Arrthree}>
             <img className={classes.Tick} src={WhiteTick}/>
                 <p className={classes.AnimationName}>Illustration</p>
                 <img className={classes.UserImg} src={BlueImg} />
                 <p>26 Dec</p>
                 <div className={classes.ColorGreen}></div>
             </div>
             <div className={classes.Arrfour}>
             <img className={classes.Tick} src={WhiteTick}/>
                 <p className={classes.AnimationName}>Refunds</p>
                 <img className={classes.UserImg} src={RedImg} />
                 <p>28 Dec</p>
                 <div className={classes.ColorRed}></div>
             </div>
         </div>  */}


        </div>



        </div>
    )
}
