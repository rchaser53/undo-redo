export interface EventHTMLTarget extends EventTarget {
	checked: boolean
	value: any
}

export const getUniqueId = (): string => {
    return Math.random().toString(35).substr(2, 10)
}

/** for primitive only */
export const mergeArray = <T>(targetArray: T[], values: T[]): T[] => {
	return values.reduce((stack, value) => {
		return stack.includes(value) ? stack : stack.concat([value])
	}, targetArray)
}

/** for primitive only */
export const removeElementFromArray = <T>(targetArray: T[], values: T[]): T[] => {
	return values.reduce((stack, value) => {
		if (stack.includes(value)) stack.splice(stack.indexOf(value), 1)
		return stack
	}, targetArray)
}