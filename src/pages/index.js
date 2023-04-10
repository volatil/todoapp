import { useState, useEffect } from "react";
import $ from "jquery";

import Head from "next/head";
import { Inter } from "next/font/google";

import { getTodos } from "../helpers/helpers";

import Darkmode from "../components/darkmode";
import Header from "../components/Header";
import Crear from "../components/Crear";
import Todos from "../components/Todos";
import NavInferior from "../components/NavInferior";

import css from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [darkmode, setdarkmode] = useState();
	const [losTODO, setlosTODO] = useState();

	const estadoDarkmode = function () {
		if ( localStorage.getItem("todoapp_darkmode") === null ) {
			localStorage.setItem("todoapp_darkmode", false);
		} else if ( localStorage.getItem("todoapp_darkmode") === "false" ) {
			setdarkmode(false);
		} else {
			setdarkmode(true);
		}
	};
	const switchDarkmode = function () {
		if (darkmode === true) {
			setdarkmode(false);
			localStorage.setItem("todoapp_darkmode", false);
		} else {
			setdarkmode(true);
			localStorage.setItem("todoapp_darkmode", true);
		}
	};

	useEffect(() => {
		estadoDarkmode();
		setlosTODO( getTodos() );
	}, []);

	return (
		<>
			<Head>
				<title>TODO App</title>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
			</Head>
			<Darkmode estado={darkmode}>
				<span className={css.imagenheader} />
				<section>
					<Header estado={darkmode} elon={() => { switchDarkmode(); }} />
					<Crear setlosTODO={setlosTODO} />
					<Todos losTODO={losTODO} />
					<NavInferior losTODO={losTODO} />
				</section>
			</Darkmode>
		</>
	);
}
