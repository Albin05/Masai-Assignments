import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';

const Headsets = () => {
	const [headsets, setHeadsets] = useState([]);
	useEffect(() => {
		fetchHeadsets();
	}, []);
	const fetchHeadsets = async () => {
		const { data } = await axios('http://localhost:8080/headsets');
		setHeadsets(data);
	};
	return (
		<>
			<h2 style={{ margin: '2rem 0' }}>Headsets</h2>
			<LaptopsList>
				{headsets.map(hs => (
					<Link to={`./${hs.id}`} key={hs.id}>
						<Product prod={hs} />
					</Link>
				))}
			</LaptopsList>
		</>
	);
};

export default Headsets;

const LaptopsList = styled.div`
	display: grid;
	display: center;
	justify-content: center;
	grid-template-columns: repeat(2, 200px);
	grid-template-rows: 250px;
	grid-gap: 50px;
	margin-bottom: 30rem;
`;
