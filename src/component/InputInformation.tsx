import * as React from 'react'

import { updateTemporaryData } from '../action/application'
import {
	Item,
	ItemDataKey
} from '../reducer/item'
import InputRow from './InputRow'

export interface Props {
	temporaryItem: Item
}

export class InputInformation extends React.Component<Props, {}> {

	context: {
		dispatch: (args) => void;
	}
	static contextTypes = {
		dispatch: React.PropTypes.any
	}

	updateTemporaryData = (key: ItemDataKey , value: string) => {
		const { id } = this.props.temporaryItem
		this.context.dispatch(updateTemporaryData({
				id,
				[key]: value
		}))
	}

	render() {
			return	<div>
								{
									inputInformationDef.map(({label, key}) => {
										return <InputRow label={label} key={key} value={this.props.temporaryItem[key]}
															propertyKey={key} updateTemporaryData={this.updateTemporaryData} />
									})
								}
							</div>
	}
}
export default InputInformation

const inputInformationDef = [
	{label: 'Name', key: 'name'},
	{label: 'Date', key: 'date'},
	{label: 'Importance', key: 'importance'},
]