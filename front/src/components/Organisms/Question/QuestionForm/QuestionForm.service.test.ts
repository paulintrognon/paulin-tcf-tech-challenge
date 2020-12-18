import { AnswerType } from '../../../../types/AnswerType'
import { editMessage, removeMessage } from './QuestionForm.service'

describe('QuestionForm.service', () => {
  describe('editMessage()', () => {
    it('should return a new answer with an edited message', () => {
      const answer: AnswerType = {
        id: '1',
        messages: ['message 1', 'message 2', 'message 3'],
        askSatisfaction: false,
      }

      // Should edit the answer
      const newAnswer = editMessage(answer, 1, 'New message')
      expect(newAnswer).toEqual({
        id: '1',
        messages: ['message 1', 'New message', 'message 3'],
        askSatisfaction: false,
      })

      // Should keep original answer untouched
      expect(answer).toEqual({
        id: '1',
        messages: ['message 1', 'message 2', 'message 3'],
        askSatisfaction: false,
      })
    })
  })

  describe('removeMessage()', () => {
    it('should return a new answer without the deleted message', () => {
      const answer: AnswerType = {
        id: '1',
        messages: ['message 1', 'message 2', 'message 3'],
        askSatisfaction: false,
      }

      // Should remove the message
      const newAnswer = removeMessage(answer, 1)
      expect(newAnswer).toEqual({
        id: '1',
        messages: ['message 1', 'message 3'],
        askSatisfaction: false,
      })

      // Should keep original answer untouched
      expect(answer).toEqual({
        id: '1',
        messages: ['message 1', 'message 2', 'message 3'],
        askSatisfaction: false,
      })
    })
  })
})
