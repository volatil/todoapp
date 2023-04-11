import { agregarDB } from "../helpers/helpers";

import crear from "../styles/Crear.module.css";
import dark from "../styles/Darkmode.module.css";

export default function Crear(props) {
	const { setlosTODO } = props;
	const agregaDB = function () {
		const valor = document.querySelector(".addTODO").value;
		if ( valor.length === 0 ) {
			/* eslint-disable */
			alert("Debes ingresar un todo valido");
			/* eslint-enable */
		} else {
			setlosTODO( agregarDB(valor) );
		}
	};

	return (
		<section className={`${crear.crear} ${dark.crear}`}>
			<ul>
				<li>
					<input className="addTODO" type="text" placeholder="Create a new todo ..." />
					<button onClick={agregaDB} type="button">+</button>
				</li>
			</ul>
		</section>
	);
}
