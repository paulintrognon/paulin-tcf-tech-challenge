import { getQuestion } from './questionManager'

const question2 = { id: '2' }
jest.mock('../db', () => ({
  questions: [{ id: '1' }, question2, { id: '3' }],
}))

describe('questionManager', () => {
  it('should return question from its id', () => {
    expect(getQuestion('2')).toBe(question2)
  })

  it('should return undefined if question not found', () => {
    expect(getQuestion('4')).toBe(null)
  })
})
