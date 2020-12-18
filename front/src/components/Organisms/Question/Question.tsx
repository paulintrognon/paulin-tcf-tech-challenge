import useSWR, { mutate } from 'swr'
import { BASE_API_URL } from '../../../services/api/api'
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

  const handleSubmit = async (question: QuestionType): Promise<void> => {
    await fetch(`${BASE_API_URL}/questions/${questionId}`, {
      method: 'post',
      body: JSON.stringify({ question }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    })
    mutate(`/questions/${questionId}`, { ...data, question })
  }

  return <QuestionForm question={data.question} onSubmit={handleSubmit} />
}
export default Question
