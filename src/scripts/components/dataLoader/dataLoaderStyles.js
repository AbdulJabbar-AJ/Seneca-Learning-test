import styled from "styled-components"

const Loader = styled.div`
	width: 120px;
	height: 1rem;
	line-height: 1rem;
	display: flex;
	justify-content: space-evenly;
	margin-left: auto;
	>div {
		width: 1rem;
		height: 1rem;
		border-radius: 1rem;
		cursor: pointer;
		&:first-child { background: orange; }
		&:nth-child(2) { background: lightskyblue; }
		&:last-child { background: salmon; }
	}
`
export default Loader
