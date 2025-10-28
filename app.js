import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'

dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended: true}))

app.get('/', (req, res) => {
    res.send('Hello World!')
    console.log("entro a la ruta home actualizada")
})

app.post('/', (req, res) => {
    onsole.log("entro a la ruta home del post")
    const products = [
        { name: "camara prof", id: "1" },
        { name: "camara prof", id: "2" }
    ]
    res.json({
        "Productos":products})
    
})

app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
})
