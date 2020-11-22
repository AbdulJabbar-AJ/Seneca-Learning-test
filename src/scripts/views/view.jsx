// @flow
import * as React from 'react'
import styled from 'styled-components'
import TogglesQuestion from '../components/togglesQuestion/togglesQuestion'

const StyledView = styled.div`
	height: 100%;
	width: 100%;
	border: 3px solid green;
	box-sizing: border-box;
	padding: 10px
`


export default function View(): React.Node {
	// Temporary Dummy data
	const question = 'An animal cell contains'
	const toggles = [
		{options: ['Cell wall', 'Ribosomes'], answer: 1},
		{options: ['Cytoplasm', 'Chloroplast'], answer: 0},
		{options: ['Partially permeable membrane', 'Impermeable membrane'], answer: 0},
		{options: ['Cellulose', 'Mitochondria'], answer: 1},
	]

	return (
		<StyledView>
			<TogglesQuestion {...{ question, toggles }} />
		</StyledView>
	)
}
