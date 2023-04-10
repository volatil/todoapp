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

	if ( task.length === 0 ) {
		alert("Debes ingresar un todo valido");
	} else if ( localStorage.getItem(DB) === null ) {
		const nuevotask = [];
		nuevotask.push( task );
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
		return JSON.parse(localStorage.getItem(DB));
	}
	console.debug( `Agregando: ${task}` );
	const nuevotask = JSON.parse( localStorage.getItem(DB) );
	nuevotask.push( task );
	localStorage.setItem(DB, JSON.stringify( nuevotask ));
	return JSON.parse(localStorage.getItem(DB));
}

export function getTodos() {
	const lostodo = JSON.parse( localStorage.getItem(DB) );
	return lostodo;
}
