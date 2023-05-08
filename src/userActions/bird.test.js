import { cageTheBird, getTheBird } from './bird.js'
import { messages, objects, settings } from '../data/index.js'
import { destroyObject } from '../object.js'

jest.mock('../object.js', () => {
    const original = jest.requireActual('../object.js')
    return {
        ...original,
        destroyObject: jest.fn(),
    }
})

describe('User Action - Bird actions', () => {
    const bird = objects.find(({ id }) => id === 'bird')

    beforeEach(() => {
        settings.currentLocation = 'locBird'
    })

    afterEach(() => {
        bird.currentState = 'birdUncaged'
        settings.currentLocation = 'locStart'
        settings.inventory = []
    })

    describe('getTheBird = "Carry bird"', () => {
        describe('When bird is uncaged', () => {
            it('should NOT get the bird if it is in the forest', () => {
                // given
                bird.currentState = 'birdForestUncaged'

                // when
                const result = getTheBird(bird)

                // then
                expect(destroyObject).toHaveBeenCalled()
                expect(settings.inventory).toEqual([])
                expect(result).toEqual(messages.birdCrap)
            })

            it('should NOT get the bird if there is NO cage', () => {
                const result = getTheBird(bird)

                expect(settings.inventory).toEqual([])
                expect(result).toEqual(messages.cannotCarry)
            })

            it('should NOT get the bird if there is a rod', () => {
                // given
                settings.inventory = ['cage', 'rod']

                // when
                const result = getTheBird(bird)

                // then
                expect(settings.inventory).toEqual(['cage', 'rod'])
                expect(result).toEqual(messages.birdEvades)
            })

            it('should get the bird if there is a cage and NO rod', () => {
                // given
                settings.inventory = ['cage']

                // when
                const result = getTheBird(bird)

                // then
                expect(settings.inventory).toEqual(['cage', 'bird'])
                expect(bird.currentState).toEqual('birdCaged')
                expect(result).toEqual(messages.okMan)
            })
        })
    })

    describe('cageTheBird = "Carry cage or Cage bird"', () => {
        describe('When there is NO bird', () => {
            it('should NOT get the bird', () => {
                // given
                settings.currentLocation = 'locStart'

                // when
                const result = cageTheBird()

                // then
                expect(settings.inventory).toEqual([])
                expect(result).toEqual(messages.doWhat('carry'))
            })
        })

        describe('When bird is uncaged', () => {
            it('should get the cage and NOT the bird', () => {
                // given
                settings.inventory = ['cage']

                // when
                const result = cageTheBird()

                // then
                expect(settings.inventory).toEqual(['cage'])
                expect(result).toEqual(messages.okMan)
            })

            it('should NOT get the bird if there is a rod', () => {
                // given
                settings.inventory = ['cage', 'rod']

                // when
                const result = cageTheBird()

                // then
                expect(settings.inventory).toEqual(['cage', 'rod'])
                expect(result).toEqual(messages.birdEvades)
            })
        })

        describe('When bird is caged', () => {
            it('should get the bird AND the cage', () => {
                // given
                bird.currentState = 'birdCaged'
                settings.inventory = ['cage']

                // when
                const result = cageTheBird()

                // then
                expect(settings.inventory).toEqual(['cage', 'bird'])
                expect(result).toEqual(messages.okMan)
            })
        })
    })
})
