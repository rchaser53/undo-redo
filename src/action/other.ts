import { Action } from 'redux'

export const UNDO = 'UNDO'
export const undo = (): Action => {
	return {
		type: UNDO
	}
}

export const REDO = 'REDO'
export const redo = (): Action => {
	return {
		type: REDO
	}
}

export const STACK_STATE = 'STACK_STATE'
export const stackState = (): Action => {
	return {
		type: STACK_STATE
	}
}