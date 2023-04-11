import Image from "next/image";

import { useEffect, useState } from "react";
import { eliminar } from "../helpers/helpers";

import todos from "../styles/Todos.module.css";
import dark from "../styles/Darkmode.module.css";

function TodoVacio() {
	return (<li className={dark.nohay}>no hay TODO&apos;s 😢</li>);
}

export default function Todos(props) {
	const { losTODO, setlosTODO } = props;

	return (
		<section id="todos" className={`${todos.todos} ${dark.todos}`}>
			<ul>
				{
					losTODO
						? losTODO?.map((todo) => {
							const { fechacompleta, task } = todo;
							return (
								<li key={fechacompleta}>
									<label htmlFor={fechacompleta}>
										<input id={fechacompleta} type="checkbox" />
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
