import { useEffect, useState } from "react";

import navcss from "../styles/Navcss.module.css";
import dark from "../styles/Darkmode.module.css";

export default function NavInferior(props) {
	const { losTODO } = props;
	const lascantidades = !losTODO ? "no"
								: losTODO.length === 1 ? "1"
								: losTODO.length
	
	return (
		<nav className={`${navcss.menu} ${dark.menu}`}>
			<p>{lascantidades} items left</p>
			<ul>
				<li>all</li>
				<li>active</li>
				<li>completed</li>
			</ul>
			<p>clear completed</p>
		</nav>
	);
}
