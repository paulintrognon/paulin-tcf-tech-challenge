import { questions } from '../db'
import { QuestionType } from '../types/QuestionType'

/**
 * Return a question from a question ID
 */
export function getQuestion(questionId: string): QuestionType | null {
  return questions.find((question) => question.id === questionId) || null
}

/**
 * Updates a question
 */
export function updateQuestion(questionId: string, question: QuestionType): void {
  const index = questions.findIndex((question) => question.id === questionId)
  if (index === undefined) {
    return
  }
  questions[index] = question
}
