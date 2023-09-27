import express from 'express'
import 'dotenv/config'

const app = express()
const PORT = process.env.PORT

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})