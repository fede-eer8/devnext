import { container } from "assets/jss/nextjs-material-kit.js";

import image from "assets/img/sign.jpg";

const coverStyle = {
	section: {
		minHeight: "110vh",
		maxHeight: "1600px",
		overflow: "hidden",
		padding: "70px 0",
		backgroundPosition: "top center",
		backgroundSize: "cover",
		backgroundRepeat: "no-repeat",
		margin: "0",
		border: "0",
		display: "flex",
		alignItems: "center",
		// backgroundImage: "url(" + image + ")"
	},
	container,
	form: {
		margin: "0"
	},
	parallax: {
		color: "white",
		// height: "100vh",
		minHeight: "400px",
  		backgroundImage: "url(" + image + ")",
		backgroundRepeat: "no-repeat",
		backgroundPosition: "center",
		backgroundSize: "cover",
		backgroundAttachment: "fixed"
	},
}

export default coverStyle;