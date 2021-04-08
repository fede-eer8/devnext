import React from "react";
import Head from 'next/head';
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import HeaderLinks from "components/Header/HeaderLinksNew.js";
import Parallax from "components/Parallax/Parallax.js";

import styles from "assets/jss/nextjs-material-kit/pages/landingPage.js";

import ProductSection from "pages-sections/LandingPage-Sections/ProductSection.js";
import TeamSection from "pages-sections/LandingPage-Sections/TeamSection.js";
import WorkSection from "pages-sections/LandingPage-Sections/WorkSection.js";
import Cover from "pages-sections/LandingPage-Sections/Cover.js";

const dashboardRoutes = [];

const useStyles = makeStyles(styles);

export default function HomePage(props) {
	const classes = useStyles();
  const { ...rest } = props;

	return (
		<div>
      <Head>
        <title>Crea tu sitio Web</title>
      </Head>
			<Header
			color="transparent"
			routes={dashboardRoutes}
			brand="Web Ahora"
			rightLinks={<HeaderLinks />}
			fixed
			changeColorOnScroll={{
				height: 400,
				color: "white"
			}}
			{...rest}
      />
			<Parallax filter responsive image={require("assets/img/landing-bg.jpg")}>
					<div className={classes.container}>
						<GridContainer>
							<GridItem xs={12} sm={12} md={6}>
								<h1 className={classes.title}>Empezá publicando tu sitio web</h1>
								<h4>
									Tenemos lo necesario para llevar tu negocio al estado virtual.
									Te asistimos en cada parte del proceso. Llamanos!																																																																																																																																																																																																																																																											{/*  */}
								</h4>
								<br />
								<Button
									color="danger"
									size="lg"
									href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fas fa-play" />
									Watch video
								</Button>
							</GridItem>
						</GridContainer>
					</div>
				</Parallax>
				<div className={classNames(classes.main, classes.mainRaised)}>
					<div className={classes.container}>
						<ProductSection />
						<TeamSection />
						<WorkSection />
					</div>
					<Cover />
					<ProductSection />
				</div>
        <a
        href="https://wa.me/+5492616711989"
        className={classes.whatsapp_float}
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className={classes.whatsappIcon + " fab fa-whatsapp"}></i>
      </a>
				<Footer />
        
			</div>
	)
}