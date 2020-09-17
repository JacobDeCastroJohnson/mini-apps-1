const express = require('express')
const app = express()
const port = 3000

//Serve up local files
app.use('/', express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World Challenge 3!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})