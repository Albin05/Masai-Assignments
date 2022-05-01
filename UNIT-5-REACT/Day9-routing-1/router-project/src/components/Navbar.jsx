import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
	return (
		<Nav>
			<NavLeft>
				<h1>
					<Link to='/'>REACT shoppe_</Link>
				</h1>
			</NavLeft>
			<NavCenter>
				<Link to='/mobiles'>Mobiles</Link>
				<Link to='/laptops'>Laptops</Link>
				<Link to='/Headsets'>Headsets</Link>
			</NavCenter>
			<NavRight>
				<Link to='/login'>Login</Link>
				<Link to='/signup'>Signup</Link>
				<span>
					<FaShoppingCart />
				</span>
			</NavRight>
		</Nav>
	);
};

export default Navbar;

const Nav = styled.nav`
	width: 100%;
	height: 3.5rem;
	padding: 0 2rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: black;
	color: white;
`;
const NavLeft = styled.div`
	& a {
		color: white;
		text-decoration: none;
	}
`;
const NavCenter = styled.div`
	& a {
		font-weight: 600;
		text-decoration: none;
		margin-right: 1rem;
		color: white;
	}
`;
const NavRight = styled.div`
	display: flex;
	align-items: center;
	& a {
		font-weight: 600;
		text-decoration: none;
		margin-right: 1rem;
		color: white;
	}
	& span {
		font-size: 1.5rem;
	}
`;
