// @flow
import * as React from 'react'
import {type Node, useEffect} from 'react'
import { connect } from 'react-redux'
import datasets from '../../../model/dataset.json'
import { type Dataset, type DatasetAction, setData } from './datasetActions'
import Loader from './dataLoaderStyles'

type Props = {
	setData: (dataset: Dataset) => DatasetAction,
}

function DataLoader({setData}: Props): Node {
	useEffect(() => {
		setData(datasets[0])
	}, [])

	return (
		<Loader>
			Load:
			{datasets.map((dataset, index) => (
				<div {...{key: index, onClick: () => setData(dataset)}}></div>
			))}
		</Loader>
	)
}


const mapStateToProps = (): {} => ({})
const mapDispatchToProps = ({ setData })

export default connect<Props, _, _, _, _, _>(mapStateToProps, mapDispatchToProps)(DataLoader)

// Props, OwnProps, StateProps, DispatchProps, State, Dispatch
// Note - Can't figure this out yet. This is the first time I've used flow