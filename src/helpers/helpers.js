import { DB } from "./CONST";

export function agregarDB(task) {
	const fecha = {
		ano: new Date().getFullYear(),
		mes: new Date().getMonth(),
		dia: new Date().getDate(),
		hora: new Date().getHours(),
		minuto: new Date().getMinutes(),
		segundo: new Date().getSeconds(),
	};
	const fechacompleta = String(fecha.ano) + String(fecha.mes) + String(fecha.dia) + String(fecha.hora) + String(fecha.minuto) + String(fecha.segundo);

	if ( localStorage.getItem(DB) === null ) {
		const nuevotask = [];
		nuevotask.push({ fechacompleta, task, activo: true });
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
		return JSON.parse(localStorage.getItem(DB));
	}
	const nuevotask = JSON.parse( localStorage.getItem(DB) );
	nuevotask.push({ fechacompleta, task, activo: true });
	localStorage.setItem(DB, JSON.stringify( nuevotask ));
	return JSON.parse(localStorage.getItem(DB));
}

export function getTodos() {
	const lostodo = JSON.parse( localStorage.getItem(DB) );
	return lostodo;
}

export function eliminar(todoAEliminar) {
	const tasks = JSON.parse(localStorage.getItem(DB));
	for ( let count = 0; count <= tasks.length - 1; count++ ) {
		if ( tasks[count].fechacompleta === todoAEliminar ) {
			tasks.splice(count, 1);
		}
	}
	localStorage.setItem(DB, JSON.stringify(tasks));
	return tasks;
}
