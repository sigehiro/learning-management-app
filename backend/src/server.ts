import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
app.use(express.json())

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!, {})
        console.log('MongoDB Connected')
    } catch (err) {
        console.error(err)
        process.exit(1)
    }
}

connectDB()

//初期での起動確認：curl -i http://localhost:3000/
app.get('/', (req, res) => {
    res.send('Hello World')
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
