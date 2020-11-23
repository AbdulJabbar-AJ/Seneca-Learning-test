export default function generateGradient(colourA, colourB, noOfColoursRequired) { // assume rgba
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

