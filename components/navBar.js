import React from 'react';
import Link from 'next/link';

function navBar() {
	return (
		<>
			<nav>
				<Link href="#">
					<a data-text="home">
						home
					</a>
				</Link>
				<Link href="#">
					<a data-text="about">
						about
					</a>
				</Link>
				<Link href="#">
					<a data-text="projects">
						projects
					</a>
				</Link>
			</nav>
		</>
	);
}

export default navBar;