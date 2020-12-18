import useSWR from 'swr'
import { QuestionType } from '../../../types/QuestionType'
import QuestionForm from './QuestionForm/QuestionForm'

type QuestionApiResponseType = {
  question: QuestionType | null
}

interface Props {
  questionId: string
}
const Question: React.FC<Props> = ({ questionId }) => {
  const { data } = useSWR<QuestionApiResponseType>(`/questions/${questionId}`, {
    refreshInterval: 0,
  })

  if (!data) {
    return <p>Loading...</p>
  }

  if (!data.question) {
    return <p>Question {questionId} does not exist.</p>
  }

  const handleSubmit = (question: QuestionType): void => {
    console.log(question)
  }

  return <QuestionForm question={data.question} onSubmit={handleSubmit} />
}
export default Question
