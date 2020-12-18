import { Router } from 'express'
import { getCategories } from '../managers/categoryManager'

const router = Router()

router.get('/', (req, res) => {
  const categories = getCategories()
  res.status(200).send({ categories })
})

export default router
