import React from 'react';
import classes from  './Topbar.module.css';
import StunningIcon from '../assets/stunning-logo.png';
export default function TopBar() {
    return (
        <div className={classes.TopBar}>
             <header className={classes.Topbar}>
            <img className={classes.Logo} src={StunningIcon} alt="Menu Icon" />
          
            <div className={classes.SearchContainer}>
            <nav className={classes.NavBar}>
                <span className={classes.NavItems}>Home</span>
                <span className={classes.NavItems}>About</span>
                <span className={classes.NavItems}>Blogs</span>
                <span className={classes.NavItems}>Jobs</span>
            </nav>
            </div>

            <div className={classes.AcountDiv}>
                <p className={classes.AccountDivText}>Your Account</p>
            </div>
           <div  className={classes.HamburgerLines}> <i class="fas fa-bars"></i></div>
            </header>
        </div>
    )
}
