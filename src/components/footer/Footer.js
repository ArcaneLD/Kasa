/* eslint-disable jsx-a11y/alt-text */
import logo from '../../assets/logo_footer.png'

import './footer.scss'

//Return the footer component
export default function Footer() {
	return (
		<footer className='footer'>
			<img src={logo} />
			<p className='footer_mark'>© 2020 Kasa. All rights reserved</p>
		</footer>
	)
}
