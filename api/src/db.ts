import { CategoryType } from './types/CategoryType'
import { QuestionType } from './types/QuestionType'

export const questions: QuestionType[] = [
  {
    id: '1-1',
    question: 'Comment contacter le service client ?',
    answer: {
      id: '1-1-1',
      askSatisfaction: true,
      messages: [
        'Vous pouvez contacter le service client en vous rendant sur la page http://example.com.',
      ],
    },
  },
  {
    id: '1-2',
    question: 'Est-il possible de vous joindre par téléphone ?',
    answer: {
      id: '1-2-1',
      askSatisfaction: false,
      messages: [
        'Vous pouvez contacter le service client en vous rendant sur la page http://example.com.',
      ],
    },
  },
  {
    id: '2-1',
    question: 'Voici un exemple de question ?',
    answer: {
      id: '2-1-1',
      askSatisfaction: false,
      messages: ['Et voici un exemple de réponse'],
    },
  },
]

export const categories: CategoryType[] = [
  {
    id: '1',
    title: 'Contact & facturation',
    questions: [questions[0], questions[1]],
  },
  {
    id: '2',
    title: 'Autres',
    questions: [questions[2]],
  },
]
