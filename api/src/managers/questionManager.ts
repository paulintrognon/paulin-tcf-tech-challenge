import { questions } from '../db'
import { QuestionType } from '../types/QuestionType'

/**
 * Return a question from a question ID
 */
export function getQuestion(questionId: string): QuestionType | null {
  return questions.find((question) => question.id === questionId) || null
}
