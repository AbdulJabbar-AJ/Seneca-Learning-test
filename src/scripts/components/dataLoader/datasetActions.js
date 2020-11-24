//@flow
export type Dataset = {
	question: string,
	toggles: Array<{
		options: [string, string],
		answer: number
	}>
}

export type DatasetAction = { type: 'SET_DATA', dataset: Dataset }

export function setData(dataset: Dataset): DatasetAction {
	return { type: 'SET_DATA', dataset }
}