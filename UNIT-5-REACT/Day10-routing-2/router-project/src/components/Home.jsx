import styled from 'styled-components';

import Banner from './Banner';

const Home = () => {
	return (
		<main>
			<Banner />
			<SectionOne />
		</main>
	);
};

export default Home;

const SectionOne = styled.div`
	width: 100%;
	height: 10rem;
`;
