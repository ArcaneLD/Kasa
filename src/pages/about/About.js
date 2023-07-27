import './about.scss';

import { aboutDatas } from '../../data/data';

import Header from '../../components/header/Header';
import Banner from '../../components/banner/Banner';
import Collapse from '../../components/collapse/Collapse';
import Footer from '../../components/footer/Footer';

//Renders the about section. It is used to display the information about the application.
export default function About() {
	return (
		<div>
			<Header />
			<Banner />
			<main className='about_main'>
				{aboutDatas.map(aboutDatas => {
					return (
						<div key={aboutDatas.id} className="about_main_collapse">
							<Collapse style={{margin:'30px 0'}}  title={aboutDatas.title} content={aboutDatas.content} />
						</div>)}
				)}
			</main>
			<Footer />
		</div>
	)
}
