import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
	FaFacebookSquare,
	FaInstagram,
	FaSnapchatSquare,
	FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterDiv>
			<p style={{ color: 'lightgrey' }}>Some important links</p>
			<Links>
				<Link to='/faq'>FAQs</Link>
				<Link to='/aboutus'>About us</Link>
				<Link to='/contactus'>Contact us</Link>
			</Links>
			<p style={{ color: 'lightgrey' }}>Socials</p>
			<Socials>
				<span>
					<FaFacebookSquare />
				</span>
				<span>
					<FaInstagram />
				</span>
				<span>
					<FaSnapchatSquare />
				</span>
				<span>
					<FaYoutube />
				</span>
			</Socials>
			<p style={{ marginTop: '1rem' }}>REACT shoppe_ copyright@2022</p>
		</FooterDiv>
	);
};

export default Footer;

const FooterDiv = styled.div`
	width: 100%;
	height: 13rem;
	padding: 1rem;
	background-color: black;
	color: white;
	position: absolute;
	bottom: 0;
	left: 0;
`;

const Socials = styled.div`
	margin-top: 1rem;
	& span {
		font-size: 1.2rem;
		margin: 0.4rem;
	}
`;

const Links = styled.div`
	margin: 1rem;

	& a {
		color: white;
		margin: 1rem;

		text-decoration: none;
		font-weight: 600;
	}
`;
