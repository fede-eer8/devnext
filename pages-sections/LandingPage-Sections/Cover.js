import React from "react";
import { useEffect, useState } from "react"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import People from "@material-ui/icons/People";
import Email from "@material-ui/icons/Email";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/ParallaxC.js";

import styles from "assets/jss/nextjs-material-kit/pages/componentsSections/coverStyle.js";

const useStyles = makeStyles(styles);

export default function Cover() {

  const classes = useStyles();
  const parallax = React.useRef(null);

  React.useEffect(() => {
    function scrollHandler() {
      const element = parallax.current;
      if (element) {
        let offset = window.pageYOffset;
        element.style.backgroundPositionY = offset * .12 + 'px';
      }
    }
    window.addEventListener('scroll', scrollHandler)
    // return the function to remove the handler
    // which will be run whn Hero is unmounted
    return () => window.removeEventListener('scroll', scrollHandler);
  }, []);

  return (
      <div ref={parallax}>
        <div className={classes.parallax}> 
          <div className={classes.container}>
          <h1>Here we go</h1>
          <h4>Tenemos lo necesario para llevar tu negocio al estado virtual.
            Te asistimos en cada parte del proceso. Llamanos!	Tenemos lo necesario para llevar tu negocio al estado virtual.
            Te asistimos en cada parte del proceso. Llamanos!	Tenemos lo necesario para llevar tu negocio al estado virtual.
            Te asistimos en cada parte del proceso. Llamanos!	Tenemos lo necesario para llevar tu negocio al estado virtual.
            Te asistimos en cada parte del proceso. Llamanos!	</h4>
          </div>
        </div>
      </div>
    
  );
}
