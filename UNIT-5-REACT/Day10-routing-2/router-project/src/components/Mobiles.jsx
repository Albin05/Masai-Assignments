import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';

const Mobiles = () => {
	const [mobiles, setMobiles] = useState([]);
	useEffect(() => {
		fetchMobiles();
	}, []);
	const fetchMobiles = async () => {
		const { data } = await axios('http://localhost:8080/mobiles');
		setMobiles(data);
	};
	return (
		<>
			<h2 style={{ margin: '2rem 0' }}>Mobiles</h2>
			<MobilesList>
				{mobiles.map(mobile => (
					<Link to={`./${mobile.id}`} key={mobile.id}>
						<Product prod={mobile} />
					</Link>
				))}
			</MobilesList>
		</>
	);
};

export default Mobiles;

const MobilesList = styled.div`
	display: grid;
	display: center;
	justify-content: center;
	grid-template-columns: repeat(2, 200px);
	grid-template-rows: 250px;
	grid-gap: 50px;
	margin-bottom: 30rem;
`;
