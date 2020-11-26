// @flow
import React, {type Node} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import { GlobalStyles } from '../../styles/globalStyles'
import TogglesQuestion from '../components/togglesQuestion/togglesQuestion'
import DataLoader from '../components/dataLoader/dataLoader'
import { type Dataset } from '../components/dataLoader/datasetActions'

const StyledView = styled.div`
	height: 100%;
	width: 100%;
	box-sizing: border-box;
	padding: 10px;
`

type Props = { dataset: Dataset }

function View({dataset}: Props): Node {
	return (
		<StyledView>
			<GlobalStyles />
			<DataLoader />
			{dataset.question && <TogglesQuestion {...{question: dataset.question, toggles: dataset.toggles}} />}
		</StyledView>
	)
}


const mapStateToProps = state => ({
	dataset: state.dataset
})

export default connect(mapStateToProps)(View)
