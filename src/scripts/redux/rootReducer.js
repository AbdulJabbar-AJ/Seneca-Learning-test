// @flow
import { type DatasetAction } from '../components/dataLoader/datasetActions'
type State = { +dataset: mixed }
type Action = DatasetAction

const initState: State = {
	dataset: {}
}

export default function rootReducer(state: State = initState, action: Action): State {
	switch (action.type) {
		case 'SET_DATA':
			return { ...state, dataset: action.dataset }
		default:
			return state
	}
}