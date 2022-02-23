import React from 'react';
import Link from 'next/link';
import { useRouter } from "next/router";

function navBar() {
	const router = useRouter();
	// console.log(Link);

	return (
		<>
			<nav className='navigation'>
				<ul>
					<li className={(router.asPath == "/#home") ? "active" : ""} data-text="home">
						<Link href="#home">home</Link>
					</li>
					<li className={router.asPath == "/#about" ? "active" : ""} data-text="about">
						<Link href="#about">about</Link>
					</li>
					<li className={router.asPath == "/#work" ? "active" : ""} data-text="work">
						<Link href="#work">work</Link>
					</li>
					<li className={router.asPath == "/#hire-me" ? "active" : ""} data-text="hire me">
						<Link href="#hire-me">hire me</Link>
					</li>
				</ul >

			</nav >
		</>
	);
}

export default navBar;