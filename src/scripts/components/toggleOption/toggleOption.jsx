// @flow
import React, {type Node, useState} from 'react';
import styled from 'styled-components'

const Option = styled.div`
	color: ${props => props.selected ? 'red' : 'black'};
`

type Props = {
	name: string,
	value: number,
	selected: boolean,
	toggleValue: (value: number) => mixed
}

export default function ToggleOption({name, value, selected, toggleValue}: Props) :Node {
	return (
		<Option {...{selected, onClick: () => toggleValue(value)}}>
			{name}
		</Option>
	)
}

