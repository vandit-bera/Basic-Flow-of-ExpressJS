const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`Hello! You want Your profile? Please Enter 'profile' after localhost:3000/ AND want to see API Please Enter 'api' after localhost:3000/`)
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

app.get("/api", (req, res) => {
  const profile = {
    name : "vandit",
    followers : 5000,
    follow : 500,
  }
  res.status(200).json({ profile })
})

app.listen(port, () => {
  console.log(`Server is running on port number: ${port}`)
})