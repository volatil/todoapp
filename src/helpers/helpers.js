export default function agregarDB(task) {
	const DB = "todoapp_db";
	const fecha = {
		ano: new Date().getFullYear(),
		mes: new Date().getMonth(),
		dia: new Date().getDate(),
		hora: new Date().getHours(),
		minuto: new Date().getMinutes(),
		segundo: new Date().getSeconds(),
	};
	const fechacompleta = String(fecha.ano) + String(fecha.mes) + String(fecha.dia) + String(fecha.hora) + String(fecha.minuto) + String(fecha.segundo);

	if (task.length === 0) {
		console.debug( "No hay un TODO por agregar" );
	} else if ( localStorage.getItem(DB) === null ) {
		const nuevotask = {};
		Object(nuevotask)[fechacompleta] = task;
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
	} else {
		console.debug( `Agregando: ${task}` );
		const nuevotask = JSON.parse( localStorage.getItem(DB) );
		Object(nuevotask)[fechacompleta] = task;
		localStorage.setItem(DB, JSON.stringify( nuevotask ));
	}
}
