import * as React from 'react'

import { outputRowHeader } from '../../css/component'
import { Items } from '../reducer/item'
import {
	activateItem,
	deactivateItem
} from '../action/application'
import OutputRow from './OutputRow'

export interface Props {
  items: Items
}

export default class OutputArea extends React.Component<Props, {}> {

	context: {
		dispatch: (...arg) => void
	}
	static contextTypes = {
		dispatch: React.PropTypes.any
	}

	activateAction = (id: string, flg: boolean) => {
		(flg)
			? this.context.dispatch(activateItem(id))
			: this.context.dispatch(deactivateItem(id))
	}

	render() {
		const { items } = this.props

		return (
		<div>
				<div style={{display: 'flex'}}>
					<div className={outputRowHeader}>Name</div>
					<div className={outputRowHeader}>Due Date</div>
					<div className={outputRowHeader}>Importance</div>
				</div>
				{
					Object.keys(items || {}).map((key) => {
						const {name, date, importance} = items[key]
						return <OutputRow key={key} name={name || ''} date={date || ''} id={key}
												importance={importance || ''} activateItem={this.activateAction} />
					})
				}
		</div>
		)
	}
}