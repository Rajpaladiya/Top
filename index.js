const { connect } = require("mongoose");
const MongoToConnect = require("./db");
const cors = require('cors')
MongoToConnect(); 

const express = require('express')
const app = express()

app.use(cors())
app.use(express.json())
//avialable routes
app.use('/api',require('./routes/Crud'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(5000)


