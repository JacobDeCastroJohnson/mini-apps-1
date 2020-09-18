const express = require('express')
const app = express()
const port = 3000



//Serving static local files
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.send('Hello World Connect 4!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

//test

