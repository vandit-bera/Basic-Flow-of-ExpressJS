const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello! You want Your profile? Please Enter 'profile' after localhost:3000/`)
})

app.get("/profile", (req, res) => {
    res.send(`Great! You are in profile page!
    Please Enter Your name into URL after profile/ and see magic...`)
})

app.get("/profile/:name", (req, res) => {
    let name = req.params.name;
    res.send(`Hello! ${ name }
    How are You!!! Nice to Meet you in This Cool project`)
})

app.listen(port, () => {
  console.log(`Server is running on port number: ${port}`)
})