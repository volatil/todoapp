import todos from "../styles/Todos.module.css";
import dark from "../styles/Darkmode.module.css";

export default function Todos(props) {
	const { losTODO } = props;
	return (
		<section id="todos" className={`${todos.todos} ${dark.todos}`}>
			<ul>
				{!losTODO && (<li style={{ color: "white" }}>no hay TODO&apos;s 😢</li>)}
				{
					losTODO?.map((todo, algo) => {
						const { fechacompleta, task } = todo;
						return (
							<li key={fechacompleta}>
								<label htmlFor={fechacompleta}>
									<input id={fechacompleta} type="checkbox" />
									{task}
								</label>
							</li>
						);
					})
				}
			</ul>
		</section>
	);
}
