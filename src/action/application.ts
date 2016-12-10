import { Action } from 'redux'

import { Item } from '../reducer/item'
import { getUniqueId } from '../helper'

export interface ActivateItem extends Action {
	payload: { ids: string[] }
}
export const ACTIVATE_ITEM = 'ACTIVATE_ITEM'
export const activateItem = (ids: string | string[]): ActivateItem => {
	return {
		type: ACTIVATE_ITEM,
		payload: {
			ids: (Array.isArray(ids)) ? ids : [ids]
		}
	}
}
export const isACTIVATE_ITEM = (action: Action) : action is ActivateItem => {
	return action.type === ACTIVATE_ITEM
}

export interface DeactivateItem extends Action {
	payload: { ids: string[] }
}
export const DEACTIVATE_ITEM = 'DEACTIVATE_ITEM'
export const deactivateItem = (ids: string | string[]) => {
	return {
		type: DEACTIVATE_ITEM,
		payload: {
			ids: (Array.isArray(ids)) ? ids : [ids]
		}
	}
}
export const isDEACTIVATE_ITEM = (action: Action) : action is DeactivateItem => {
	return action.type === DEACTIVATE_ITEM
}

export interface UpdateTemporaryData extends Action {
	payload: Item
}
export const UPDATE_TEMPORARY_DATA = 'UPDATE_TEMPORARY_DATA'
export const updateTemporaryData = (item: Item) => {
	return {
		type: UPDATE_TEMPORARY_DATA,
		payload: item
	}
}
export const isUPDATE_TEMPORARY_DATA = (action: Action) : action is UpdateTemporaryData => {
	return action.type === UPDATE_TEMPORARY_DATA
}

export interface RenewTemporaryDataId extends Action {
	payload: Item
}
export const RENEW_TEMPORARY_DATA_ID = 'RENEW_TEMPORARY_DATA_ID'
export const renewTemporaryDataId = () => {
	return {
		type: RENEW_TEMPORARY_DATA_ID,
		payload: {id: getUniqueId()}
	}
}
export const isRENEW_TEMPORARY_DATA_ID = (action: Action) : action is RenewTemporaryDataId => {
	return action.type === RENEW_TEMPORARY_DATA_ID
}