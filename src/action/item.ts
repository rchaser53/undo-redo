import { Action } from 'redux'

import { Item } from '../reducer/item'
import { getUniqueId } from '../helper'

export interface UpsertItem extends Action {
	payload: Item
}
export const UPSERT_ACTION = 'UPSERT_ACTION'
export const upsertItem = (payload: Item): UpsertItem => {
	return {
		type: UPSERT_ACTION,
		payload
	}
}
export const isUPSERT_ACTION = (action: Action) : action is UpsertItem => {
	return action.type === UPSERT_ACTION
}

export interface DeleteItem extends Action {
	payload: { id: string }
}
export const DELETE_ACTION = 'DELETE_ACTION'
export const deleteItem = (id: string): DeleteItem => {
	return {
		type: DELETE_ACTION,
		payload: {
			id
		}
	}
}
export const isDELETE_ACTION = (action: Action) : action is DeleteItem => {
	return action.type === DELETE_ACTION
}