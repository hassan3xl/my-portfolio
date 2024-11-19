import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import NotFound from './pages/NotFound';
import Projects from './pages/Projects';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<MainLayout />}>
				<Route index element={<HomePage />} />,
				<Route path="/projects" element={<Projects />} />,
				<Route path="/resume" element={<Resume />} />,
				<Route path="/contact" element={<Contact />} />,
				<Route path="/about" element={<About />} />,
				<Route path="*" element={<NotFound />} />
			</Route>,
		),
	);
	return <RouterProvider router={router} />;
};

export default App;
