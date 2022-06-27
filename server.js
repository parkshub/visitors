const express = require('express')
const app = express()

const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const PORT = 8000

require('dotenv').config()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())



app.get('/', (req, res) => {
    res.render('index.ejs')
    console.log('hellow world')
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
