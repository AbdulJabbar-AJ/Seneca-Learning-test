import styled, { keyframes } from 'styled-components'

const slideRight = keyframes`
  from { left: 0 }
  99% { left: 50% }
  to { left: unset; right: 0;}
}
`

const StyledToggle = styled.div`
	border: 1px solid #fbfbfb;
	cursor: ${props => props.isCorrect ? 'not-allowed' : 'pointer'};
	height: 100%;
	border-radius: 3rem;
	display: flex;
	width: 100%;
	position: relative;
	
	.slider {
		height: 100%;
		width: 50%;
		position: absolute;
		border-radius: 3rem;
		background-color: rgba(249, 249, 249, 0.5);
		box-shadow: 0 0 6px 1px rgba(195, 51, 51, 0.5);
		left:${props => props.selectedValue === 0 ? 0 : 'unset'};
		right:${props => props.selectedValue === 1 ? 0 : 'unset'};
		&.slideRight { animation: 0.3s ${slideRight} ease-out forwards };
		&.slideLeft { animation: 0.3s ${slideRight} ease-out reverse };
	}
`

export default StyledToggle