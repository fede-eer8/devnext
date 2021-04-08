import { container, title } from "assets/jss/nextjs-material-kit.js";

const landingPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",  //color del subtitulo header
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF", //color de fondo de la tarjeta mayor
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px", //margen usado
    borderRadius: "6px",
    boxShadow:          // sombra de la caja web
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
    "@media (max-width: 830px)": {
      marginLeft: "10px",
      marginRight: "10px"
    }
  },
  whatsapp_float: {
    position: "fixed",
    width: "60px",
    height: "60px",
    bottom: "40px",
    right: "40px",
    background: "#25d366",
    color: "#FFF",
    borderRadius: "50px",
    textAlign: "center",
    fontSize: "30px",
    boxShadow: "2px 2px 3px #999",
    zIndex: "100",
    "@media (max-width: 830px)": {
      width: "40px",
      height: "40px",
      bottom: "20px",
      right: "10px",
      fontSize: "22px"
    }
  },
  whatsappIcon: {
    marginTop: "16px",
    "@media (max-width: 830px)": {
      marginTop: "10px",
    }
  },
};

export default landingPageStyle;
