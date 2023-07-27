import './card.scss'
import { Link } from 'react-router-dom'

//Return a Card Component, mainly used in the making of the Gallery
export default function Card({id, title, cover}) {

	return (
		<Link to={`/logement/${id}`} className="card">
			<img src={cover} alt={title} />
			<h3>{title}</h3>	
		</Link>
	)
}
