import * as React from 'react'

import {
  upsertItem,
  deleteItem
} from '../action/item'
import { renewTemporaryDataId } from '../action/application'
import { Item } from '../reducer/item'

export interface Props {
	temporaryItem: Item
	activateItem: string[]
}

export class AddDeletefooter extends React.Component<Props, {}> {
	context: {
		dispatchUndo: (arg) => void
	}
	static contextTypes = {
		dispatchUndo: React.PropTypes.any
	}

	addItem = () => {
		this.context.dispatchUndo([
			upsertItem(this.props.temporaryItem),
			renewTemporaryDataId()
		])
	}

	deleteItem = () => {
		this.context.dispatchUndo(
			this.props.activateItem.map((id) => {
				return deleteItem(id)
			}))
	}

	render() {
		return <div>
						<button onClick={this.addItem}>add</button>
						<button onClick={this.deleteItem}>delete</button>
					</div>
	}
}
export default AddDeletefooter