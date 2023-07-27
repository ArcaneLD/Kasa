import './404page.scss'

import Header from "../../components/header/Header";
import { Link } from 'react-router-dom';

// Return 404 NotFound Page
export default function notFoundPage() {
	return (
		<div className='notFound'>
			<Header />
			<div className="notFound_infos">
				<h1 className='notFound_infos_title'>404</h1>
				<p className='notFound_infos_error'>La page que vous recherchez n'existe pas.</p>
			</div>
				<Link className='notFound_infos_back' to='/'>Retourner sur la page d'accueil</Link>
		</div>
	)
}
