// @flow
import React, {type Node, useState} from 'react';
import Toggle from '../toggle/toggle'
import calcColours from './bgGradient'
import Question from './togglesQuestionStyles'
import { type Dataset } from '../dataLoader/datasetActions'

export default function TogglesQuestion({question, toggles}: Dataset): Node {
	const [selectedValues, setSelectedValues] = useState([])
	const [questionString, setQuestionString] = useState('') // See notes below on why I set this

	const correctAnswer = toggles.map(toggle => toggle.answer)
	const checkAnswers = (answers: number[]): boolean => answers.every((answer, index) => answer === correctAnswer[index])
	const isCorrect = checkAnswers(selectedValues)
	const colours = calcColours(toggles)
	let mark = 0

	function randomiseValues() {
		const randomArray = toggles.map(() => Math.floor(Math.random() * 2))
		checkAnswers(randomArray) ? randomiseValues() : setSelectedValues(randomArray)
	}

	function updateToggles(index: number, value: number) {
		setSelectedValues(prevState => (
			prevState.map((val, i) => index === i ? value : val)
		))
	}


	if (selectedValues.length !== toggles.length || questionString !== question) {
		randomiseValues()
		setQuestionString(question)
	}
	/*** NOTE ***/
	// The second test above (after the OR) is for an edge case where the no. of toggles between two questions are the same
	// Without this, the toggles would stay in the same position. This not only looks strange, but also could make a question correct on load
	// We are just using the question string to track when it changes.
	// This means there is more than one source of truth when it comes to the question string, I need to think more about how I could eliminate the need for this.
	// I could have used a useEffect hook, but this would still cause the flickering issue when the randomised questions are initially correct (I checked, It's hard to notice ...
	// ... because there are much less side effects occurring, but I did a screen record and slowed it down to confirm, it still happens)

	// Also, This could potentially be an issue if there are two question with the same string but with different toggles (i.e. the second one expands on the first question)
	// we could either force an unmount between questions, or perhaps the use case is such that each of these components do not share a div with the other (I believe your app works like that)


	// Mark the question
	selectedValues.forEach((value, index) => {
		if (value === correctAnswer[index]) {
			mark++
		}
	})

	return (
		<Question bgColour={colours[mark]}>
			<div className='question'>{question}</div>
			<div className="togglesContainer">
				<div className="toggles">
					{toggles.map((toggle, index) => (
						<Toggle {...{ key: index, position: index, data: toggle, selectedValue: selectedValues[index], isCorrect, updateToggles }}/>
					))}
				</div>
			</div>
			<div className='answer'>The answer is {isCorrect ? 'correct' : 'incorrect'}</div>
		</Question>
	)
}
