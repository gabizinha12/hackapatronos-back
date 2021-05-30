import express from 'express'
import routes from './routes'
import cors from 'cors'
const port =  process.env.PORT || 3030
const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))
app.use(cors())

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
app.use(routes)