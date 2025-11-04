import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

import routerProducts from './routesProducts.js'
import { errorHandler } from './middelware/errors.js'
import connectionMongoDB from './config/db.js'
console.log(connectionMongoDB);

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

// CONECCION A MONGO
connectionMongoDB()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.use('/api/products',routerProducts)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
