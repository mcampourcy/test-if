import { listen } from './listen.js'
import { messages, settings, sounds } from '../data/index.js'

describe('User Action - Listen', () => {
    beforeEach(() => {
        settings.currentLocation = 'locBuilding'
    })

    afterEach(() => {
        settings.currentLocation = 'locStart'
    })

    describe('When it is all silent', () => {
        it('should not return a sound', () => {
            // given
            settings.currentLocation = 'locTightplace'

            // when
            const result = listen()

            // then
            expect(result).toEqual(messages.allSilent)
        })
    })

    describe('When current location has sounds', () => {
        it('should return sounds', () => {
            const result = listen()

            expect(result).toEqual(sounds.streamGurgles)
        })
    })

    describe('When there is a noisly object', () => {
        it('should return the sound of the object', () => {
            // given
            settings.currentLocation = 'locWestpit'

            // when
            const result = listen()

            expect(result).toEqual('The plant continues to ask plaintively for water.')
        })
    })
})
