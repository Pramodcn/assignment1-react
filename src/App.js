import React from 'react';

import TopBar from './Topbar/TopBar';
import Maincontainer from './MainContainer/Maincontainer';
import ImageContainer from './ImageContainer/Imagecontainer';
import classes from './App.module.css';

function App() {
  return (
    <div className="App">
  <TopBar/>
  <div className={classes.LandingSection}>
<div className={classes.Left}>
<Maincontainer/>
</div>
<div className={classes.Right}>
  <ImageContainer/>
</div>
  </div>
    </div>
  );
}

export default App;
