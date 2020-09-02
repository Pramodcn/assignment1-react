import React from 'react';
import classes from "./Animation.module.css";
import WhiteTick from '../assets/tick-gray.png';
import BlueTick from '../assets/tick-blue.png';
import BlueImg from '../assets/user-blue.png';
import OrangeImg from '../assets/user-orange.png';
import PinkImg from '../assets/user-pink.png';
import RedImg from '../assets/user-red.png';

export default function Animation() {
    return (
        <div>
            <div className={classes.AnimationFlex}>
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
         </div>

        </div>
    )
}
