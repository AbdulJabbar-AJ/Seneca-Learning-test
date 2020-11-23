// @flow
import React, {type Node, useState} from 'react';
import ToggleOption from '../toggleOption/toggleOption'
import StyledToggle from './toggleStyles'


export type ToggleObject = {
	options: [string, string],
	answer: number,
}

type Props = {
	data: ToggleObject,
	position: number,
	selectedValue: number,
	isCorrect: boolean,
	updateToggles: (index: number, value: number) => mixed
}

export default function Toggle({data, position, selectedValue, isCorrect, updateToggles}: Props) :Node {
	const [sliderClassname, setSliderClassname] = useState('slider')

	const toggleValue = (value: number) => {
		if (!isCorrect) {
			selectedValue === 0 ? setSliderClassname('slider slideRight') : setSliderClassname('slider slideLeft')
			setTimeout(() => setSliderClassname('slider'), 300)
			updateToggles(position, value)
		}
	}

	return (
		<StyledToggle {...{isCorrect, selectedValue}}>
			<div className={sliderClassname}></div>
			{
				data.options.map((option, index) => (
					<ToggleOption {...{ key: index, name: option, value: index, selected: selectedValue === index, toggleValue }}/>
				))
			}
		</StyledToggle>
	)
}

