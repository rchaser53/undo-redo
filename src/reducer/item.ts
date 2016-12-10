import {
	Reducer,
	Action
} from 'redux'

import {
    isUPSERT_ACTION,
    isDELETE_ACTION
} from '../action/item'

export interface BaseItem {
	name?: string
	date?: string
	importance?: string
}

export type ItemDataKey = 'name' | 'date' | 'string'

export interface Item extends BaseItem {
	id: string
}

export interface Items {
    [key: string]: Item
}

export interface ItemState {
    past: Items[]
    present: Items
    future: Items[]
}

const itemsState = {
    past: [],
    present: {},
    future: []
}

export default (state: Items = {}, action: Action): Items => {
	if (isUPSERT_ACTION(action)) {
		return {...state, [action.payload.id]: action.payload}
	}

	if (isDELETE_ACTION(action)) {
		const { [action.payload.id]: deletedItem, ...rest } = state
		return rest
	}

	return state
}