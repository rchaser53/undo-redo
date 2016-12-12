import * as React from 'react'
import * as expect from 'expect'
import { shallow } from 'enzyme'
import sinon from 'sinon'

import AddDeleteFooter from '../../src/component/AddDeleteFooter'

describe('components', () => {
	describe('PropertiesInputNumberRow', () => {

		it('should complete to render', () => {
			const temporaryItem = {
				id: 'testId',
				name: 'testName',
				importance: 'testImportance',
				date: 'testDate'
			}

			const addDeleteFooter = shallow(<AddDeleteFooter
																				temporaryItem={temporaryItem}
																				activateItem={[]} />)

			expect(addDeleteFooter.length > 0).toEqual(true)
		})
	})
})