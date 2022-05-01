import styled from 'styled-components';

const Product = ({ prod }) => {
	return (
		<Card>
			<img src={prod.img} alt='' />
			<h2>{prod.name}</h2>
			<h4>{prod.price}</h4>
			<h4>{prod.company}</h4>
		</Card>
	);
};

export default Product;

const Card = styled.div`
	& img {
		width: 90%;
	}
`;
