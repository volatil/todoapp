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
		nuevotask.push( task );
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
	} else {
		console.debug( `Agregando: ${task}` );
		const nuevotask = JSON.parse( localStorage.getItem(DB) );
		nuevotask.push( task );
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
	}
}

export function getTodos() {
	const lostodo = JSON.parse( localStorage.getItem(DB) );
	return lostodo;
}
