// @flow
import React, {type Node, useEffect, useState} from 'react';
import Toggle, {type ToggleObject} from '../toggle/toggle'
import generateGradient from './bgGradient'
import Question from './togglesQuestionStyles'


type Props = {
	question: string,
	toggles: ToggleObject[],
}



export default function TogglesQuestion({question, toggles}: Props): Node {
	const [selectedValues, setSelectedValues] = useState(Array(toggles.length).fill(0))
	const [colours, setColours] = useState(Array(toggles.length).fill(0))
	const [isCorrect, setIsCorrect] = useState(false)
	const [mark, setMark] = useState(0)

	const correctAnswer = toggles.map(toggle => toggle.answer)

	useEffect(() => {
		randomiseValues()
		setColours(calcColours())
	}, [])

	useEffect(() => { checkAnswer(selectedValues) && setIsCorrect(true) }, [selectedValues])

	const randomiseValues = () => {
		const randomArray = selectedValues.map(() => Math.floor(Math.random()*2))
		checkAnswer(randomArray) ? setIsCorrect(false) && randomiseValues() : setSelectedValues(randomArray)
	}

	function checkAnswer(values: number[]): boolean {
		const total = toggles.length
		let score = 0
		values.forEach((value, index) => {
			value === correctAnswer[index] ? score++ : null
		})
		setMark(score)

		return score / total === 1
	}

	function updateToggles(index: number, value: number) {
		setSelectedValues(prevValues => (
			prevValues.map((val, i) => index === i ? value : val)
		))
	}

	function calcColours(): string[] {
		const colA = '247,59,28,0.7'
		const colB = '244, 187, 49, 1'
		const colC = '7, 205, 221, 1'
		const colours = []


		if (toggles.length === 1) {
			colours.push(`rgba(${colA})`)
			colours.push(`rgba(${colC})`)
		} else if (toggles.length == 2) {
			colours.push(`rgba(${colA})`)
			colours.push(`rgba(${colB})`)
			colours.push(`rgba(${colC})`)
		} else {
			let splitA
			let splitB

			if (toggles.length % 2 == 0) {
				splitA = (toggles.length/2) + 1
				splitB = splitA
			} else {
				splitB = (toggles.length + 1) / 2
				splitA = splitB + 1
			}

			const partA = generateGradient(colA, colB, splitA)
			const partB = generateGradient(colB, colC, splitB)
			partA.forEach(colour => colours.push(colour))
			colours.pop()
			partB.forEach(colour => colours.push(colour))
		}

		//
		// colours.forEach(colour => {
		// 	const split = colour.split('rgba')[1].replaceAll(/ |\(|\)/gi, '').split(',').map(val => Number(val))
		// 	split[0] = Math.max(0, split[0] + 3)
		// 	split[1] = Math.min(255, split[1] + 25)
		// 	split[2] = Math.max(0, split[2] - 30)
		// 	topColours.push(`rgba(${split[0]},${split[2]},${split[2]},${split[3]})`)
		// })
		return colours
	}



	return (
		<Question colours={colours} mark={mark}>
			<div className='question'>{question}</div>
			<div className='togglesContainer' >
				<div className='toggles'>
					{toggles.map((toggle, index) => (
						<Toggle {...{key: index, position: index, data: toggle, selectedValue: selectedValues[index], updateToggles, isCorrect}} />
					))}
				</div>
			</div>
			<div className='answer'>The answer is {isCorrect ? 'correct' : 'incorrect'}</div>
		</Question>
	)
}
