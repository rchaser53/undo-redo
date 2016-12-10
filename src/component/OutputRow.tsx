import * as React from 'react'

import {
	outputRow,
	outputRowItem
} from '../../css/component'
import { EventHTMLTarget } from '../helper'

export interface Props {
	id: string
	name: string
	date: string
	importance: string
	activateItem: (id: string, flg: boolean) => void
}

export class OutputRow extends React.Component<Props, {}> {
	activateItem = (event) => {
		const {id, activateItem} = this.props
		activateItem(id, (event.target as EventHTMLTarget).checked)
	}

	render() {
		const {name, date, importance} = this.props
		return (<div className={outputRow}>
							<div className={outputRowItem}>{name}</div>
							<div className={outputRowItem}>{date}</div>
							<div className={outputRowItem}>{importance}</div>
							<input type='checkbox' onChange={this.activateItem} />
						</div>)
	}
}
export default OutputRow