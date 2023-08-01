/* eslint-disable jsx-a11y/alt-text */
import './accomodation.scss'

import { datas } from '../../data/data';

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";

import NotFound from '../404page/404page';

import Header from "../../components/header/Header";
import Slider from "../../components/slider/Slider"
import Footer from "../../components/footer/Footer";
import Collapse from '../../components/collapse/Collapse';
import greyStar from '../../assets/grey_star.png';
import redStar from '../../assets/red_star.png';


//Displays information about an accomodation. It is used to display the pictures associated with the host and for previewing the user's experience.

export default function Accomodation() {

	const id = useParams('id').id;
	const accomodationData = datas.filter(data => data.id === id);

	
	//Using new JS property to prevent fatal error
	const name = accomodationData[0]?.host.name.split(' '); 
	const description  = accomodationData[0]?.description;
	const rating = accomodationData[0]?.rating;
	const equipments = accomodationData[0]?.equipments;

	const [pictures, setPictures] = useState([]);
	useEffect(() => {
		setPictures(accomodationData[0]?.pictures);
	}, [accomodationData]);

	if (accomodationData.length === 0) {
		
		return (
			<>
			<NotFound />
			</>
		)
	}

	return (
		<>
			<Header/>

			<Slider imageSlider={pictures}/>

			<main className="logement">
				<div className="logement_content">
					<div className="logement_content_infos">
						<h1>{accomodationData[0]?.title}</h1>
						<p>{accomodationData[0]?.location}</p>
						<div>
							{accomodationData[0]?.tags.map((tag, index) => {
								return (<button key={index}>{tag}</button>)
							})}
						</div>
					</div>
					<div className="logement_content_host">
						<div>
							<div className='logement_content_host_name'>
								<span>{name[0]}</span>
								<span>{name[1]}</span>
							</div>
							<img src={accomodationData[0]?.host.picture} />
						</div>
							
						<div className="logement_content_host_stars">
							{[...Array(5)].map((star, index) => {
								const ratingValue = index + 1;
								return (
									<img key={index} src={ratingValue <= rating ? redStar : greyStar} alt="star" />
								)
							})}
						</div>
					</div>
				</div>
				<div className="logement_collapse">
					<div className="logement_collapse_item">
						<Collapse title={'Description'} content={description} />	
					</div>
					<div className="logement_collapse_item">
						<Collapse title={'Équipements'} content={equipments}/>
					</div>	
				</div>
			</main>

			<Footer/>
		</>
	)
}
