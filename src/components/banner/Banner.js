/* eslint-disable react-hooks/exhaustive-deps */
import './banner.scss'

import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

//Returns a banner component (see Notes below)
export default function Banner() {

	const [isAboutPage, setAboutPage] = useState(false);

	const location = useLocation();
	//Displays a different banner depending on the page youre currently watching
	useEffect(() => {
		if(location.pathname === '/apropos'){setAboutPage(true)};
	}, [])

	return (
		//(Only the Home page banner is supposed to have text in it, this part allows that easily)
		<section className={isAboutPage ? 'banner_about' : 'banner'}>
			{!isAboutPage && <p>Chez vous, partout et ailleurs</p>}
		</section>
	)
}