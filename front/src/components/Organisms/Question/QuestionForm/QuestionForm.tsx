import { useState } from 'react'
import { AnswerType } from '../../../../types/AnswerType'
import { QuestionType } from '../../../../types/QuestionType'
import RoundedContainerBox from '../../../Atoms/RoundedContainerBox/RoundedContainerBox'
import styles from './QuestionForm.module.scss'
import { addMessage, editMessage, removeMessage } from './QuestionForm.service'
import TextInput from './TextInput/TextInput'

interface Props {
  question: QuestionType
  onSubmit: (question: QuestionType) => void
}
const QuestionForm: React.FC<Props> = ({ question, onSubmit }) => {
  const [answer, setAnswer] = useState<AnswerType>(question.answer)

  const handleEditMessage = (messageIndex: number) => (value: string): void => {
    const newAnswer = editMessage(answer, messageIndex, value)
    setAnswer(newAnswer)
  }

  const handleAddMessage = (): void => {
    const newAnswer = addMessage(answer)
    setAnswer(newAnswer)
  }

  const handleDeleteMessage = (messageIndex: number) => (): void => {
    const newAnswer = removeMessage(answer, messageIndex)
    setAnswer(newAnswer)
  }

  const handleOnSubmit = (event: React.FormEvent): void => {
    event.preventDefault()
    onSubmit({
      ...question,
      answer,
    })
  }

  return (
    <form className={styles.container} onSubmit={handleOnSubmit}>
      <header className={styles.header}>
        <h1 className={styles.title}>{question.question}</h1>
        <button type="submit" className={styles.save}>
          Save
        </button>
      </header>
      <RoundedContainerBox>
        <div className={styles.form}>
          {answer.messages.map((message, i) => (
            <TextInput
              key={i}
              message={message}
              onChange={handleEditMessage(i)}
              onDelete={handleDeleteMessage(i)}
            />
          ))}
          <div className={styles.addButtonContainer}>
            <button type="button" className={styles.addButton} onClick={handleAddMessage}>
              Add
            </button>
          </div>
        </div>
      </RoundedContainerBox>
    </form>
  )
}
export default QuestionForm
