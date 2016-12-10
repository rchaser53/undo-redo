import * as React from 'react'
import { Store } from 'redux'

import { Items } from '../reducer/item'
import { State } from '../reducer/reducer'
import AddDeleteFooter from './AddDeleteFooter'
import InputInformation from './InputInformation'
import OutputArea from './OutputArea'
import UndoRedoHeader from './UndoRedoHeader'

export interface Props {
  store: Store<State>
}

export default class extends React.Component<Props, {}> {

	dispatch: (arg) => void
	dispatchUndo: (arg) => void

	static childContextTypes = {
		dispatch: React.PropTypes.any,
		dispatchUndo: React.PropTypes.any
	}

	getChildContext() {
		const { dispatch } = this.props.store
		return {
			dispatch: (actions) => {
				Array.isArray(actions)
					? actions.forEach((action) => {
						dispatch(action)
					})
					: dispatch(actions)
			},
			dispatchUndo: (actions) => {
				dispatch({type: 'STACK_STATE'})

				Array.isArray(actions)
					? actions.forEach((action) => {
						dispatch(action)
					})
					: dispatch(actions)
				}
		}
	}

	constructor(props) {
		super()
		props.store.subscribe(this.forceUpdate.bind(this))
	}

  render() {
		const { items, application } = this.props.store.getState()
		const { temporaryItem, activeItems } = application

		return (
			<div>
				<UndoRedoHeader />
				<div style={{display: 'flex'}}>
					<div style={{width: '50%'}}>
						<InputInformation temporaryItem={temporaryItem} />
						<AddDeleteFooter temporaryItem={temporaryItem} activateItem={activeItems} />
					</div>
					<div style={{width: '50%'}}>
						<OutputArea items={items.present} />
					</div>
				</div>
			</div>
		)
	}
}