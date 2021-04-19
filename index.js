const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 4000

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

newUser = {
  email: "",
  fullName: "",
  password: ""
}

app.post('/userRegistration', (req, res) => {
  newUser.email= req.body.email
  newUser.fullName=req.body.fullName
  newUser.password=req.body.password
  console.log(newUser);
  res.send({userRegistered: newUser});
})

app.put('/userLogin', (req, res) => {
  const userVerification = {
    email: '',
    password: ''
  }
  userVerification.email = req.body.email
  userVerification.password = req.body.password

  if (userVerification.email === newUser.email && userVerification.password == newUser.password) {
    res.send({ logged: userVerification })
  }
  else {
    res.status(404).send({ error: 'Invalid user' })
  }
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
