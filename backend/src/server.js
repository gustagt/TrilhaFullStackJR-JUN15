const express = require('express')
const projectsRouter = require('./routes/projects.router')



const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded())

app.use('/projects', projectsRouter)

// explicação da api
app.use('*', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

