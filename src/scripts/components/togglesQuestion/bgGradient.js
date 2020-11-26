function generateGradient(colourA, colourB, noOfColoursRequired) { // assume rgba
	const results = []
	const steps = noOfColoursRequired - 1

	const splitChannels = colour => colour.replaceAll(/ |\(|\)/gi, '').split(',').map(val => Number(val)) // Array of [r, g, b, A]
	const c1 = splitChannels(colourA)
	const c2 = splitChannels(colourB)

	// Calculate intervals
	const calcInterval = (val1, val2) => ( Math.max(val1, val2) - Math.min(val1, val2) ) / steps
	const rStep = calcInterval(c1[0], c2[0])
	const gStep = calcInterval(c1[1], c2[1])
	const bStep = calcInterval(c1[2], c2[2])
	const aStep = calcInterval(c1[3], c2[3])

	const pushResult = (r, g, b, a) => results.push(`rgba(${r}, ${g}, ${b}, ${a})`)
	pushResult(...c1)
	
	let [r, g, b, a] = [...c1]

	for (let i = 0; i < steps - 1; i++) {
		r = c1[0] < c2[0] ? r + Math.round(rStep) : r - Math.round(rStep)
		g = c1[1] < c2[1] ? g + Math.round(gStep) : g - Math.round(gStep)
		b = c1[2] < c2[2] ? b + Math.round(bStep) : b - Math.round(bStep)
		a = (c1[3] < c2[3]) ? a + aStep : a - aStep
		pushResult(r, g, b, a)
	}
	
	pushResult(...c2)

	return results;
}






export default function calcColours(toggles: []): string[] {
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

	return colours
}

