/* eslint-disable jsx-a11y/alt-text */
import logo from '../../assets/logo.png'

import './header.scss'

import Navbar from '../navbar/Navbar'

//returns the header component that uses the Navbar component
export default function Header() {
	return (
		<header className='header'>
			<h1><img src={logo} /></h1>
			<Navbar />
		</header>
	)
}
