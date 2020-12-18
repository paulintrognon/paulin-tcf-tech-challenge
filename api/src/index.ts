import * as express from 'express'

import pingController from './controllers/pingController'

const API_PORT = 3001

const app = express()

app.use(express.json())

app.use('/ping', pingController)

app.listen(API_PORT, () => {
  console.log(`API listening on ${API_PORT}`)
})
