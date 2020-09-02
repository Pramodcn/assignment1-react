import React from 'react';
import classes from  './Workspace.module.css';
import ArrowUp from '../assets/arrow-up.png';
import ArrowDown from '../assets/arrow-down.png';

export default function Workspace() {
    return (
        <div>
                <div className={classes.Workplace}>
                <div className={classes.TitleFlex}>
                <h1 className={classes.Title}>Stunning Workplace </h1>
                {/* <p><div className={classes.FulliStop}></div></p> */}
                <div className={classes.FulliStop}></div>
                </div>
                <p className={classes.Description}>With Stunning, remote teams can organize project, manage shifting priorities, and get work done</p>
               <div className={classes.OptionArr}>
               <button className={classes.PrimaryBtn}>
                   New Account
               </button>
             <img className={classes.ArrowUp} src={ArrowUp} />
             <div className={classes.Arrowndowndiv}>
             <img className={classes.ArrowDown} src={ArrowDown} />
             </div>
               </div>
            </div>
        </div>
    )
}
