import styled from 'styled-components';

const Banner = () => {
	return (
		<BannerDiv>
			<h3>
				Get 30% off on all electronics this summer with coupon code:
				<span> getthiryoff</span>
			</h3>
		</BannerDiv>
	);
};

export default Banner;

const BannerDiv = styled.div`
	width: 100%;
	height: 30rem;
	background-image: url('https://www.melbournemobiles.com.au/media/wysiwyg/mobile-phones-banner.JPG');

	& h3 {
		margin-top: 0.5rem;
	}

	& span {
		font-size: 1.3rem;
		color: red;
	}
`;
