import { messages, objects, settings } from '../data/index.js'
import { fill } from './fill.js'
import { removeObjectFromInventory } from '../inventory.js'
import { updateObjectState } from '../object'

jest.mock('../object.js', () => {
    const original = jest.requireActual('../object.js')
    return {
        ...original,
        updateObjectState: jest.fn(),
    }
})

jest.mock('../inventory.js', () => {
    const original = jest.requireActual('../inventory.js')
    return {
        ...original,
        removeObjectFromInventory: jest.fn(),
    }
})

describe('User Action - Fill', () => {
    const vase = objects.find(({ id }) => id === 'vase')
    beforeEach(() => {
        settings.currentLocation = 'locBuilding'
    })

    afterEach(() => {
        settings.currentLocation = 'locStart'
        settings.inventory = []
        vase.locations = ['locOriental']
    })

    it('should NOT fill an unknown object', () => {
        const result = fill({ name: 'shoe' })

        expect(result).toEqual(messages.doWhat('fill'))
    })

    describe('Fill a vase', () => {
        it('should NOT fill a vase if there is no vase anywhere', () => {
            const result = fill({ name: 'vase' })

            expect(result).toEqual(messages.doWhat('fill'))
        })

        it('should NOT fill a vase if it is in current location but NOT in inventory', () => {
            // given
            settings.currentLocation = 'locOriental'

            // when
            const result = fill({ name: 'vase' })

            // then
            expect(result).toEqual(messages.arentCarrying)
        })

        it('should NOT fill a vase if there is no liquid', () => {
            // given
            settings.currentLocation = 'locForest1'
            settings.inventory = ['vase']

            // when
            const result = fill({ name: 'vase' })

            // then
            expect(result).toEqual(messages.fillInvalid)
        })

        it('should shattered vase when filling it', () => {
            // given
            vase.locations = ['locBuilding']
            settings.inventory = ['vase']

            // when
            const result = fill({ name: 'vase' })

            // then
            expect(updateObjectState).toHaveBeenCalled()
            expect(removeObjectFromInventory).toHaveBeenCalled()
            expect(result).toEqual(messages.shatterVase)
        })
    })
})
