import { CategoryType } from './types/CategoryType'

export const categories: CategoryType[] = [
  {
    title: 'Contact & facturation',
    questions: [
      {
        question: 'Comment contacter le service client ?',
        answer: {
          askSatisfaction: true,
          messages: [
            'Vous pouvez contacter le service client en vous rendant sur la page http://example.com.',
          ],
        },
      },
    ],
  },
]
