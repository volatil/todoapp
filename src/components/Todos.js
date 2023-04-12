import { useState } from "react";
import Image from "next/image";

import TodoVacio from "./TodoVacio";

import { DB } from "../helpers/CONST";
import { eliminar } from "../helpers/helpers";

import todos from "../styles/Todos.module.css";
import dark from "../styles/Darkmode.module.css";

export default function Todos(props) {
	const { losTODO, setlosTODO } = props;

	const tareaFinish = (event) => {
		event.preventDefault();
		console.debug( "CLICK!" );
		const fechacompleta = event.target.getAttribute("data-fechacompleta");
		console.debug( `FECHA: ${fechacompleta}` );
		const lostodo = JSON.parse( localStorage.getItem(DB) );

		function cambioEstado(elestado) {
			if ( elestado === true ) {
				return false;
			}
			return true;
		}

		for ( let count = 0; count <= lostodo.length - 1; count++ ) {
			const data = {
				fecha: lostodo[count].fechacompleta,
				task: lostodo[count].task,
				isfinished: lostodo[count].isfinished,
			};

			if ( lostodo[count].fechacompleta === fechacompleta ) {
				lostodo[count].isfinished = cambioEstado(data.isfinished);
			}
		}
		console.debug( lostodo );
		setlosTODO( lostodo );
		localStorage.setItem(DB, JSON.stringify(lostodo));
	};

	return (
		<section id="todos" className={`${todos.todos} ${dark.todos}`}>
			<ul>
				{
					losTODO
						? losTODO?.map((todo) => {
							const { fechacompleta, task, isfinished } = todo;

							return (
								<li role="presentation" key={fechacompleta} data-isfinished={isfinished} onClick={tareaFinish}>
									<label htmlFor={fechacompleta} data-fechacompleta={fechacompleta}>
										<input id={fechacompleta} type="checkbox" defaultChecked={isfinished || false} />
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
