// @flow
import React, {type Node} from 'react';
import Option from './toggleOptionStyles'

type Props = {
	name: string,
	value: number,
	selected: boolean,
	toggleValue: (value: number) => mixed
}

export default function ToggleOption({name, value, selected, toggleValue}: Props) :Node {
	return (
		<Option {...{selected, onClick: () => toggleValue(value)}}>
			<div>{name}</div>
		</Option>
	)
}

