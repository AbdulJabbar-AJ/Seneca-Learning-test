// @flow
import React, {type Node, useState} from 'react';
import styled from 'styled-components'
import ToggleOption from '../toggleOption/toggleOption'

const StyledToggle= styled.div`
	border: 1px solid purple;
	box-sizing: border-box;
	cursor: ${props => props.isCorrect ? 'not-allowed' : 'pointer'};
`

export type ToggleObject = {
	options: [string, string],
	answer: number,
}

type Props = {
	data: ToggleObject,
	position: number,
	selectedValue: number,
	isCorrect: boolean,
	updateToggles: (index: number, value: number) => mixed // TODO - use correct type
}

export default function Toggle({data, position, selectedValue, isCorrect, updateToggles}: Props) :Node {
	const toggleValue = (value: number) => {
		if (!isCorrect) {
			updateToggles(position, value)
		}
	}


	return (
		<StyledToggle {...{isCorrect}}>
			{
				data.options.map((option, index) => <ToggleOption {...{ key: index, name: option, value: index, selected: selectedValue === index, toggleValue }}/>)
			}
		</StyledToggle>
	)
}

