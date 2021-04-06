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
		margin: "0",
		border: "0",
		display: "flex",
		alignItems: "center",
		backgroundImage: "url(" + image + ")"
	},
	container,
	form: {
		margin: "0"
	},
}

export default coverStyle;