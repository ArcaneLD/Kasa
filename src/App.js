import Home from './pages/home/Home';
import NotFound from './pages/404page/404page';
import About from './pages/about/About';
import Accomodation from './pages/accomodation/Accomodation';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

//Creating/Defining all the routes for the application
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />
	},
	{
		path: "/logement/:id",
		element: <Accomodation />
	},
	{
		path: '/Apropos',
		element: <About />
	},
	{
		path: "*",
		element: <NotFound />
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router}/>
		</>
	);
}

export default App;
