import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
const dbURL = process.env.DB_URL

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())

//MongoDB接続
const connectDB = async () => {
  try {
    //TODO MongoDb Atlasへの接続時に使えるようにdbURLを.envファイルに設定
    //process.env.MONGO_URI!
    //dbURL!
    await mongoose.connect(process.env.MONGO_URI!, {})
    console.log('MongoDB Connected')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

connectDB()

//初期での起動確認：curl -i http://localhost:3031/
app.get('/', (req, res) => {
  res.send('Hello World')
})

//task用のschemaとmodelを定義
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  completed: { type: Boolean, required: true },
})

const Task = mongoose.model('Task', taskSchema)

//taskの一覧取得
app.get('/tasks', async (req, res) => {
  try {
    const tasks = await Task.find()
    res.json(tasks)
  } catch (err) {
    console.error(err)
    res.status(500).send('Server Error')
  }
})

const PORT = process.env.PORT || 3031
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
