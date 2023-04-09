import css from "../styles/Home.module.css";

function Darkmode(props) {
	const { estado, children } = props;

	return (
		<main id={css.main} data-darkmode={estado}>{children}</main>
	);
}
export default Darkmode;
