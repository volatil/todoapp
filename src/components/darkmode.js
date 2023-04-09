import css from "../styles/Home.module.css";

function Darkmode(props) {
	const { estado, children } = props;

	return (
		<main id={css.body} data-darkmode={estado}>{children}</main>
	);
}
export default Darkmode;
