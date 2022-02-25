import Link from 'next/link';
import { useRouter } from "next/router";

function NavBar() {
	const router = useRouter();
	const navigation = [
		{ item: 'home', path: '/#home' },
		{ item: 'about', path: '/#about' },
		{ item: 'work', path: '/#work' },
		{ item: 'hire me', path: '/#hire-me' },
	];

	return (
		<>
			<nav className='navigation'>
				<ul>
					{navigation.map((nav, i) => {
						return (
							<li
								key={i}
								data-text={nav.item}
								className={router.asPath === nav.path ? 'navigation__item active' : 'navigation__item'}
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