import styled from "styled-components"

const Loader = styled.div`
	width: min-content;
	height: 1rem;
	line-height: 1rem;
	display: flex;
	margin-left: auto;
	>div {
		width: 1rem;
		height: 1rem;
		border-radius: 1rem;
		margin-left: 4px;
		cursor: pointer;
		&:first-child { background: orange; }
		&:nth-child(2) { background: lightskyblue; }
		&:nth-child(3) { background: orchid; }
		&:nth-child(4) { background: olivedrab; }
		&:nth-child(5) { background: peru; }
		&:last-child { background: salmon; }
	}
`
export default Loader
