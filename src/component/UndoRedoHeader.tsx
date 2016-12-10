import * as React from 'react'
import { shouldComponentUpdate } from 'react-addons-pure-render-mixin'

import { header } from '../../css/component'
import {
	undo,
	redo
} from '../action/other'

export class OutputRow extends React.Component<{}, {}> {

	context: {
		dispatch: (...arg) => void
	}
	static contextTypes = {
		dispatch: React.PropTypes.any
	}
	shouldComponentUpdate: Function

	constructor() {
		super()
		this.shouldComponentUpdate = shouldComponentUpdate.bind(this)
	}

	undoItem = () => {
		this.context.dispatch(undo())
	}

	redoItem = () => {
		this.context.dispatch(redo())
	}

	render() {
		return <div className={header}>
							<button onClick={this.undoItem}>undo</button>
							<button onClick={this.redoItem}>redo</button>
					</div>
	}
}
export default OutputRow