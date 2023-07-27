import Header from '../../components/header/Header'
import Banner from '../../components/banner/Banner'
import Gallery from '../../components/gallery/Gallery'
import Footer from '../../components/footer/Footer'

// The home component of the app. This is the top level component that displays the header banner and footer in a modal window.
export default function Home() {
	return (<div className='home'>
			<Header />
			<Banner />
			<Gallery />
			<Footer />
		</div>)}
