import { messages } from './data'
import { getInstructions } from './global'

const test = {}

jest.mock('./console', () => ({
  rl: { question: jest.fn() },
  format: jest.fn(string => string),
  consoleInput: jest.fn((question) => test.question = question),
  display: jest.fn(string => test.push(string)),
  displayLine: jest.fn(string => test.push(string)),
}))


describe.only('program', () => {
  it('should execute a cb when user prompt in cli y', () => {
    getInstructions()
    expect(test.question).toEqual(messages.welcomeYou)
  })
})
