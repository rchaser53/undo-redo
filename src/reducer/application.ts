import { Action } from 'redux'

import {
	isACTIVATE_ITEM,
	isDEACTIVATE_ITEM,
	isUPDATE_TEMPORARY_DATA,
	isRENEW_TEMPORARY_DATA_ID
} from '../action/application'
import { Item } from '../reducer/item'
import {
	getUniqueId,
	mergeArray,
	removeElementFromArray
} from '../helper'

export interface Application {
  activeItems: string[]
	temporaryItem: Item
}

const application = {
  activeItems: [],
	temporaryItem: {
		id: getUniqueId(),
		name: '',
		date: '',
		importance: ''
	}
}

export default (state: Application = application, action: Action): Application => {
	if (isACTIVATE_ITEM(action)) {
		return { ...state, activeItems: mergeArray<string>(state.activeItems, action.payload.ids)}
	}

	if (isDEACTIVATE_ITEM(action)) {
		return { ...state, activeItems: removeElementFromArray<string>(state.activeItems, action.payload.ids)}
	}

	if (isUPDATE_TEMPORARY_DATA(action)) {
		return {...state, temporaryItem: { ...state.temporaryItem, ...action.payload} }
	}

	if (isRENEW_TEMPORARY_DATA_ID(action)) {
		return {...state, temporaryItem: { ...state.temporaryItem, ...action.payload} }
	}

	return state
}