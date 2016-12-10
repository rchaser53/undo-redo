import * as React from 'react'

import { inputRowLabel } from '../../css/component'

export interface Props {
	label: string
	propertyKey: string
	value: string
	updateTemporaryData: (key: string, value: string) => void
}

export class InputRow extends React.Component<Props, {}> {
	name: HTMLInputElement
	date: HTMLInputElement
	importance: HTMLInputElement

	updateTemporaryData = (event) => {
		const {propertyKey, updateTemporaryData} = this.props
		updateTemporaryData(propertyKey, event.target.value)
	}

	render() {
		const { value, label } = this.props
		return (<div>
							<label className={inputRowLabel}>{label}</label>
							<input type='text' value={value || ''}
								onChange={this.updateTemporaryData} />
						</div>)
	}
}
export default InputRow