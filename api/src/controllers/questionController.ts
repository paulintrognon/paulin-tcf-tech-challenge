import { Router } from 'express'
import { getQuestion } from '../managers/questionManager'

const router = Router()

router.get('/:id', (req, res) => {
  const question = getQuestion(req.params.id)
  res.status(200).send({ question })
})

export default router
