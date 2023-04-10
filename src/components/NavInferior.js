import { useEffect, useState } from "react";

import navcss from "../styles/Navcss.module.css";
import dark from "../styles/Darkmode.module.css";

export default function NavInferior(props) {
	const { losTODO } = props;
	
	return (
		<nav className={`${navcss.menu} ${dark.menu}`}>
			{
				losTODO
					? (<p>{losTODO.length} items left</p>)
					: (<p>0 items left</p>)
			}
			<ul>
				<li>all</li>
				<li>active</li>
				<li>completed</li>
			</ul>
			<p>clear completed</p>
		</nav>
	);
}
