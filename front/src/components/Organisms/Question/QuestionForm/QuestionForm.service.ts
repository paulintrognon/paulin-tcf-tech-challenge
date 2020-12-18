import { AnswerType } from '../../../../types/AnswerType'

/**
 * Edit an answer's message. Will return a new answer object.
 */
export function editMessage(answer: AnswerType, messageIndex: number, message: string): AnswerType {
  // We copy the messages
  const messages = [...answer.messages]

  // We edit the message
  messages[messageIndex] = message

  // We return a new created Answer
  return {
    ...answer,
    messages,
  }
}

export function addMessage(answer: AnswerType): AnswerType {
  return {
    ...answer,
    messages: [...answer.messages, ''],
  }
}

export function removeMessage(answer: AnswerType, messageIndex: number): AnswerType {
  return {
    ...answer,
    messages: answer.messages.filter((message, index) => index !== messageIndex),
  }
}
