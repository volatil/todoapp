import navcss from "../styles/Navcss.module.css";
import dark from "../styles/Darkmode.module.css";

export default function NavInferior() {
	return (
		<nav className={`${navcss.menu} ${dark.menu}`}>
			<p>5 items left</p>
			<ul>
				<li>all</li>
				<li>active</li>
				<li>completed</li>
			</ul>
			<p>clear completed</p>
		</nav>
	);
}
