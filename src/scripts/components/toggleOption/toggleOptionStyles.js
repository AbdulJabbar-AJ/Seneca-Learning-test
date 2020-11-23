import styled from 'styled-components'

const Option = styled.div`
	color: ${props => props.selected ? '#e66549' : '#fbfbfb'};
	border-radius: 3rem;
	width: 50%;
	padding: 1rem;
	display: table;
	height: 100%;
	&:hover {
		opacity: ${props => !props.selected ? 0.8 : 1};
	}

	> div {
		display: table-cell;
		vertical-align: middle;
		width: max-content;
	}
`

export default Option
