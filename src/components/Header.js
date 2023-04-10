import Image from "next/image";

import header from "../styles/Header.module.css";

export default function Header(props) {
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
