import css from "../styles/Home.module.css";
import dark from "../styles/Darkmode.module.css";

function Darkmode(props) {
	const { estado, children } = props;

	return (
		<main id={css.body} className={dark.darkmode} data-darkmode={estado || false}>{children}</main>
	);
}
export default Darkmode;
