import { QuestionType } from './QuestionType'

export type CategoryType = {
  id: string
  title: string
  questions: QuestionType[]
}
