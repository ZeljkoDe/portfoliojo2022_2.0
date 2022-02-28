import Link from 'next/link';
import { useRouter } from "next/router";
import { useEffect } from 'react';

function NavBar() {
	const router = useRouter();
	const navigation = [
		{ item: 'home', path: '/#home' },
		{ item: 'about', path: '/#about' },
		{ item: 'work', path: '/#work' },
		{ item: 'hire me', path: '/#hire-me' },
	];

	useEffect(() => {

		const navItems = [...document.querySelector('ul').children];
		navItems.forEach((item) => {
			item.classList.remove('active');
		});
		console.log(navItems);

	});

	return (
		<>
			<nav className='navigation'>
				<ul>
					{navigation.map((nav, i) => {
						return (
							<li
								key={i}
								data-text={nav.item}
								className={'navigation__item'}
								onClick={({ target }) => target.parentElement.classList.add('active')}
							>
								<Link href={nav.path}><a>{nav.item}</a></Link>
							</li>
						);
					})}
				</ul>
			</nav >
		</>
	);
}

export default NavBar;