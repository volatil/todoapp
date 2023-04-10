import { useState, useEffect } from "react";
import $ from "jquery";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";

import { agregarDB, getTodos } from "../helpers/helpers";

import Darkmode from "../components/darkmode";
import dark from "../styles/Darkmode.module.css";

import css from "../styles/Home.module.css";
import header from "../styles/Header.module.css";
import crear from "../styles/Crear.module.css";
import todos from "../styles/Todos.module.css";
import navcss from "../styles/Navcss.module.css";

const inter = Inter({ subsets: ["latin"] });

function Header(props) {
	const { estado, elon } = props;

	return (
		<header className={header.header}>
			<h1>TODO</h1>
			<button onClick={elon} type="button">
				{
					estado
						? ( <Image src="/assets/svg/sun.svg" width={25} height={25} alt="Solcito" /> )
						: ( <Image src="assets/svg/moon.svg" width={25} height={25} alt="lalunallena" /> )
				}
			</button>
		</header>
	);
}

function Crear(props) {
	const { setlosTODO } = props;
	const agregaDB = function () {
		const valor = document.querySelector(".addTODO").value;
		setlosTODO( agregarDB(valor) );
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

function Todos(props) {
	const { losTODO } = props;
	return (
		<section id="todos" className={`${todos.todos} ${dark.todos}`}>
			<ul>
				{!losTODO && (<li style={{ color: "white" }}>no hay TODO&apos;s 😢</li>)}
				{
					losTODO?.map((todo) => {
						return (
							<li key={todo}>
								<label htmlFor={todo}>
									<input id={todo} type="checkbox" />
									{todo}
								</label>
							</li>
						);
					})
				}
			</ul>
		</section>
	);
}

function NavInferior() {
	return (
		<nav className={`${navcss.menu} ${dark.menu}`}>
			<p>5 items left</p>
			<ul>
				<li>all</li>
				<li>active</li>
				<li>completed</li>
			</ul>
			<p>clear completed</p>
		</nav>
	);
}

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
		<Darkmode estado={darkmode}>
			<span className={css.imagenheader} />
			<section>
				<Header estado={darkmode} elon={() => { switchDarkmode(); }} />
				<Crear setlosTODO={setlosTODO} />
				<Todos losTODO={losTODO} />
				<NavInferior />
			</section>
		</Darkmode>
	);
}
