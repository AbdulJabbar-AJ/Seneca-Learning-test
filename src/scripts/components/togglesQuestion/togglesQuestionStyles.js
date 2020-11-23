import styled from "styled-components"

const Question = styled.div`
	border-radius: 0.5rem;
	position: relative;
	top: 50%;
	transform: translateY(-50%);
	background-color: ${props => props.colours[props.mark]};
	box-shadow: 0 2px 12px 6px rgba(167, 196, 220, 0.5);
	max-width: 900px;	
	margin: auto;
	padding: 0.5rem 0;
	text-align: center;
	color: #FFFFFF;
	font-weight: bold;
	display: grid;

	.question, .answer {
		height: 100%;
		line-height: 4rem;
	}
	
	.togglesContainer {
		margin: 0 1rem;
		margin: 0 15%;
		@media only screen and (max-width: 768px) {
			margin: 0 1rem;
		}	
	}

	.toggles {
		display: grid;
		grid-gap: 1rem;
	}
`

export default Question