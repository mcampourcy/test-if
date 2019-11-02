import { messages } from './data'
import { getInstructions } from './global'

const test = []

jest.mock('./console', () => ({
  rl: { question: jest.fn() },
  format: jest.fn(string => test.push(string)),
  // consoleInput: jest.fn((question) => test.push(question)),
  // display: jest.fn(string => test.push(string)),
  // displayLine: jest.fn(string => test.push(string)),
}))


describe.only('program', () => {
  it.only('should execute a cb when user prompt in cli y', () => {
    // const mock = jest.fn()
    const test = getInstructions()
    console.log(test)
    // expect(test.question).toEqual(messages.welcomeYou)
  })
})
