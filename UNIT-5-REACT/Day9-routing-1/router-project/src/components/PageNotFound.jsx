import { Link } from 'react-router-dom';

const PageNotFound = () => {
	return (
		<>
			<h1 style={{ margin: '2rem 0', textAlign: 'center' }}>
				404 error - page not found
			</h1>
			<Link to='/'>
				<h2>Go back to home</h2>
			</Link>
		</>
	);
};

export default PageNotFound;
