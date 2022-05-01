import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Product from './Product';

const Laptops = () => {
	const [laptops, setLaptops] = useState([]);
	useEffect(() => {
		fetchLaptops();
	}, []);
	const fetchLaptops = async () => {
		const { data } = await axios('http://localhost:8080/laptops');
		setLaptops(data);
	};
	return (
		<>
			<h2 style={{ margin: '2rem 0' }}>Laptops</h2>
			<LaptopsList>
				{laptops.map(laptop => (
					<Link to={`./${laptop.id}`} key={laptop.id}>
						<Product prod={laptop} />
					</Link>
				))}
			</LaptopsList>
		</>
	);
};

export default Laptops;

const LaptopsList = styled.div`
	display: grid;
	display: center;
	justify-content: center;
	grid-template-columns: repeat(2, 200px);
	grid-template-rows: 250px;
	grid-gap: 50px;
	margin-bottom: 30rem;
`;
