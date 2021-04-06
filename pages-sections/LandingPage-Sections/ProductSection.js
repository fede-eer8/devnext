import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Language from '@material-ui/icons/Language';
import Storefront from '@material-ui/icons/Storefront';
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Speed from "@material-ui/icons/Speed";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.title}>Adelante con tus Proyetos</h2>
          <h5 className={classes.description}>
            Contamos con lo último para que puedas extenderte por la Web.
            Nuestros diseños son exclusivos para tu empresa.
            Tu servicio puede escalar aún mas, no dudes en preguntarnos.
            Queres que tus clientes te busquen por tus productos?, estas en el lugar indicado.

            {/* This is the paragraph where you can write more details about your */}
            {/* product. Keep you user engaged by providing meaningful information. */}
            {/* Remember that by this time, the user is curious, otherwise he wouldn */}
            {/* {"'"}t scroll to get here. Add a button if you want the user to see */}
            {/* more. */}
          </h5>
        </GridItem>
      </GridContainer>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Enlace web"
              description="Pone tu negocio al alcance de todos. Publicá tus productos y/o servicios en la web y consegui la atencion de más clientes."
              // description="Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough."
              icon={Language}
              iconColor="info"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="E-commerce"
              description="Crea tu tienda online. reciví compras directamente en tu sitio. Gestiona tus ventas en la comodidad de tu casa"
              icon={Storefront}
              iconColor="success"
              vertical
            />
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <InfoArea
              title="Publicidad"
              description="Publicamos tu tienda en linea para que sin importantar donde se encuentren tus clientes puedan acceder a los productos y servicios siempre al alcance de un click."
              icon={Speed}
              iconColor="danger"
              vertical
            />
          </GridItem>
        </GridContainer>
      </div>
      </div>
      
    </div>
  );
}
