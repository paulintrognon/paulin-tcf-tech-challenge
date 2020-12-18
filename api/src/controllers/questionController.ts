import { Router } from 'express'
import { getQuestion, updateQuestion } from '../managers/questionManager'

const router = Router()

router.get('/:id', (req, res) => {
  const question = getQuestion(req.params.id)
  res.status(200).send({ question })
})

router.post('/:id', (req, res) => {
  const question = req.body.question
  if (!question) {
    res.status(400).send()
    return
  }
  updateQuestion(req.params.id, req.body.question)
  res.status(200).send()
})

export default router
