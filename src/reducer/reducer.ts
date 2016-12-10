import {
	Action,
	Reducer,
	combineReducers
} from 'redux'
import reduxUndo, { includeAction } from 'redux-undo'

import {
	UNDO,
	REDO,
	STACK_STATE
} from '../action/other'
import items, { Items, ItemState } from './item'
import application, { Application } from './application'

export interface State {
	items: ItemState,
	application: Application
}

const stackedRootReducer = combineReducers<State>({
																items: reduxUndo(items, {
																		redoType: REDO,
																		undoType: UNDO
																}),
																application
														})

const unStackedRootReducer = combineReducers<State>({
																items: reduxUndo(items, {
																		filter: includeAction([]),
																		redoType: REDO,
																		undoType: UNDO
																}),
																application
														})

export const behaviourSwitch = (reducer1: Reducer<State>, reducer2: Reducer<State>): (state: State, action) => State => {
	return (state, action) => {
		return (action.type === STACK_STATE)
					? reducer1(state, action)
					: reducer2(state, action)
		}
}

export default behaviourSwitch(stackedRootReducer, unStackedRootReducer)