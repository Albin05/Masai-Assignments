import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

const HeadsetDetail = () => {
	const { id } = useParams();
	const [detail, setDetail] = useState({});
	useEffect(() => {
		fetchDetail();
	}, []);
	const fetchDetail = async () => {
		const { data } = await axios(`http://localhost:8080/headsets/${id}`);
		setDetail(data);
	};
	return (
		<Detail>
			<img src={detail.img} />
			<h1>Name: {detail.name}</h1>
			<h3>Price: {detail.price}</h3>
			<h3>Company: {detail.company}</h3>
			<p>Description: {detail.desc}</p>
			<Button>Add to cart</Button>
		</Detail>
	);
};

export default HeadsetDetail;

const Detail = styled.div`
	width: 40%;
	margin: 1rem auto 30rem;
	text-align: left;
	padding: 0.4rem;
	border: 1px solid black;
	& img {
		width: 100%;
	}
`;

const Button = styled.button`
	margin: 1rem;
	background-color: black;
	border: none;
	color: white;
	padding: 0.6rem 1.2rem;
`;
