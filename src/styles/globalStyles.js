import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
	html, body, #root {
		width: 100%;
		height: 100%;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		overflow: hidden;
	}
	
	#root {
		font-family: Helvetica, arial, sans-serif;
	}
`



