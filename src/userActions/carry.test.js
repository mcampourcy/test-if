import { carry } from './carry.js'
import { cageTheBird, getTheBird } from './bird.js'
import { updateObjectState } from '../object.js'
import { messages, objects, settings } from '../data/index.js'

jest.mock('../bird.js')
jest.mock('../object.js', () => {
    const original = jest.requireActual('../object.js')
    return {
        ...original,
        updateObjectState: jest.fn().mockImplementation(() => ({
            change: 'Your bottle is now full of water.',
        })),
    }
})

describe('User Action - Carry', () => {
    const bottle = objects.find(({ id }) => id === 'bottle')
    beforeEach(() => {
        settings.currentLocation = 'locBuilding'
    })

    afterEach(() => {
        bottle.currentState = 'waterBottle'
        settings.currentLocation = 'locStart'
        settings.inventory = []
        cageTheBird.mockClear()
        getTheBird.mockClear()
    })

    describe('Object name given', () => {
        it('should carry an object', () => {
            const result = carry({ name: 'bottle' })

            expect(settings.inventory).toEqual(['bottle'])
            expect(result).toEqual(messages.okMan)
        })

        it('should NOT carry anything if the object is unknown', () => {
            const result = carry({ name: 'schmibilibilick', verb: 'fill' })

            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.doWhat('fill'))
        })

        it('should NOT carry an object if it is NOT moveable', () => {
            // given
            settings.currentLocation = 'locBarrenroom'

            // when
            const result = carry({ name: 'chain' })

            // then
            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.youJoking)
        })

        it('should NOT carry an object if the inventory is full', () => {
            // given
            const currentInventory = ['1', '2', '3', '4', '5', '6', '7']
            settings.inventory = currentInventory

            // when
            const result = carry({ name: 'bottle' })

            // then
            expect(settings.inventory).toEqual(currentInventory)
            expect(result).toEqual(messages.carryLimit)
        })

        it('should NOT carry an object if it is already in inventory', () => {
            // given
            const currentInventory = ['bottle']
            settings.inventory = currentInventory

            // when
            const result = carry({ name: 'bottle' })

            // then
            expect(settings.inventory).toEqual(currentInventory)
            expect(result).toEqual(messages.alreadyCarrying)
        })
    })

    describe('No object name given', () => {
        it('should carry an object if there is ONLY ONE in the current location', () => {
            // given
            settings.currentLocation = 'locCobble'

            // when
            const result = carry({})

            // then
            expect(settings.inventory).toEqual(['cage'])
            expect(result).toEqual(messages.okMan)
        })

        it('should NOT carry an object if there is MULTIPLE objects in the current location', () => {
            const result = carry({ verb: 'take' })

            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.doWhat('take'))
        })

        it('should NOT carry an object if there is NO object in current location', () => {
            const result = carry({ verb: 'take' })

            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.doWhat('take'))
        })

        it('should NOT carry an object if it is NOT moveable', () => {
            // given
            settings.currentLocation = 'locDeadend13'

            // when
            const result = carry({})

            // then
            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.youJoking)
        })

        it('should NOT carry an object if the inventory is full', () => {
            // given
            const currentInventory = ['1', '2', '3', '4', '5', '6', '7']
            settings.currentLocation = 'locCobble'
            settings.inventory = currentInventory

            // when
            const result = carry({ })

            // then
            expect(settings.inventory).toEqual(currentInventory)
            expect(result).toEqual(messages.carryLimit)
        })

        it('should NOT carry an object if it is already in inventory', () => {
            // given
            const currentInventory = ['cage']
            settings.currentLocation = 'locCobble'
            settings.inventory = currentInventory

            // when
            const result = carry({})

            // then
            expect(settings.inventory).toEqual(currentInventory)
            expect(result).toEqual(messages.alreadyCarrying)
        })
    })

    describe('Carry bird and cage', () => {
        it('should try to carry the bird without his cage', () => {
            // given
            settings.currentLocation = 'locBird'

            // when
            carry({ name: 'bird' })

            // then
            expect(cageTheBird).not.toHaveBeenCalled()
            expect(getTheBird).toHaveBeenCalled()
        })

        it('should carry the bird', () => {
            // given
            settings.currentLocation = 'locBird'
            settings.inventory = ['cage']

            // when
            carry({ name: 'bird' })

            // then
            expect(cageTheBird).not.toHaveBeenCalled()
            expect(getTheBird).toHaveBeenCalled()
        })

        it('should carry the cage with the bird in it', () => {
            // given
            settings.currentLocation = 'locBird'

            // when
            carry({ name: 'cage' })

            // then
            // expect(bird.cageTheBird).toHaveBeenCalled()
            expect(getTheBird).not.toHaveBeenCalled()
        })
    })

    describe('Carry water or oil', () => {
        it('should take the liquid IF there is an EMPTY bottle in the inventory', () => {
            // given
            bottle.currentState = 'emptyBottle'
            settings.inventory = ['bottle']

            // when
            const result = carry({ name: 'water' })

            // then
            expect(updateObjectState).toHaveBeenCalled()
            expect(settings.inventory).toEqual(['bottle'])
            expect(result).toEqual(`Your bottle is now full of water.\n${messages.okMan}`)
        })

        it('should NOT take the liquid IF there is NO bottle anywhere', () => {
            // given
            settings.currentLocation = 'locNowhere'

            // when
            const result = carry({ name: 'water' })

            // then
            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.noContainer)
        })

        it('should NOT fill the bottle IF there is NO liquid', () => {
            // given
            settings.currentLocation = 'locForest1'
            bottle.currentState = 'emptyBottle'
            settings.inventory = ['bottle']

            // when
            const result = carry({ name: 'water' })

            // then
            expect(settings.inventory).toEqual(['bottle'])
            expect(bottle.currentState).toEqual('emptyBottle')
            expect(result).toEqual(messages.noLiquid)
        })

        it('should NOT take the liquid IF the bottle in location is NOT empty', () => {
            // when
            const result = carry({ name: 'water' })

            // then
            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.fullBottle)
        })

        it('should NOT take the liquid IF the bottle in inventory is NOT empty', () => {
            // when
            const result = carry({ name: 'water' })

            // then
            expect(settings.inventory).toEqual([])
            expect(result).toEqual(messages.fullBottle)
        })
    })
})
