// @flow
import React, {type Node, useEffect, useState} from 'react';
import styled from 'styled-components'
import Toggle, {type ToggleObject} from '../toggle/toggle'

const Question = styled.div`
	border: 1px solid purple;
	box-sizing: border-box;
`

type Props = {
	question: string,
	toggles: ToggleObject[],
}


export default function TogglesQuestion({question, toggles}: Props): Node {
	const [selectedValues, setSelectedValues] = useState(Array(toggles.length).fill(0))
	const [isCorrect, setIsCorrect] = useState(false)
	const correctAnswer = toggles.map(toggle => toggle.answer)

	useEffect(() => randomiseValues(), [])
	useEffect(() => { checkAnswer(selectedValues) && setIsCorrect(true) }, [selectedValues])

	const randomiseValues = () => {
		const randomArray = selectedValues.map(() => Math.floor(Math.random()*2))
		checkAnswer(randomArray) ? setIsCorrect(false) && randomiseValues() : setSelectedValues(randomArray)
	}

	function checkAnswer(values: number[]): boolean {
		const check = values.every((value, index) => value === correctAnswer[index])
		return check
	}

	function updateToggles(index: number, value: number) {
		setSelectedValues(prevValues => (
			prevValues.map((val, i) => index === i ? value : val)
		))
	}

	return (
		<Question>
			{question}
			{toggles.map((toggle, index) => (
				<Toggle {...{key: index, position: index, data: toggle, selectedValue: selectedValues[index], updateToggles, isCorrect}} />
			))}
			<p>The answer is {isCorrect ? 'correct' : 'incorrect'}</p>
		</Question>
	)
}