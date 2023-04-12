import Image from "next/image";

import TodoVacio from "./TodoVacio";

import { DB } from "../helpers/CONST";
import { eliminar } from "../helpers/helpers";

import todos from "../styles/Todos.module.css";
import dark from "../styles/Darkmode.module.css";

export default function Todos(props) {
	const { losTODO, setlosTODO } = props;

	function cambioEstado(elestado) {
		if ( elestado ) {
			return false;
		}
		return true;
	}

	function tareaTerminada(fechacompleta) {
		const lostodo = JSON.parse( localStorage.getItem(DB) );

		for ( let count = 0; count <= lostodo.length - 1; count++ ) {
			const data = {
				fecha: lostodo[count].fechacompleta,
				task: lostodo[count].task,
				isfinished: lostodo[count].isfinished,
			};

			if ( lostodo[count].fechacompleta === fechacompleta ) {
				console.debug( `
					-> ENTRADA
					FECHA: ${data.fecha}
					TASK: ${data.task}
					ISFINISHED: ${data.isfinished}
					function resultado: ${cambioEstado(lostodo[count].isfinished)}
				` );
				lostodo[count].isfinished = cambioEstado(data.isfinished);
				lostodo[count].isfinished = cambioEstado(data.isfinished);
				// lostodo[count].isfinished = "hola";
				console.debug( `
					-> SALIDA
					FECHA: ${data.fecha}
					TASK: ${data.task}
					ISFINISHED: ${data.isfinished}
					function resultado: ${cambioEstado(lostodo[count].isfinished)}
				` );
			}
		}
		console.debug( lostodo );
		setlosTODO( lostodo );
		localStorage.setItem(DB, JSON.stringify(lostodo));
	}

	return (
		<section id="todos" className={`${todos.todos} ${dark.todos}`}>
			<ul>
				{
					losTODO
						? losTODO?.map((todo) => {
							const { fechacompleta, task, isfinished } = todo;

							return (
								<li role="presentation" key={fechacompleta} data-isfinished={isfinished} onClick={() => tareaTerminada(fechacompleta)}>
									<label htmlFor={fechacompleta}>
										<input id={fechacompleta} type="checkbox" defaultChecked={isfinished} />
										{task}
									</label>
									<Image onClick={() => setlosTODO( eliminar(fechacompleta) )} className={todos.cerrar} src="/assets/svg/cerrar.svg" width={15} height={15} alt="Cerrar" />
								</li>
							);
						})
						: <TodoVacio />
				}
			</ul>
		</section>
	);
}
