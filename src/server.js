const express = require('express')
const axios = require('axios')

require('dotenv').config()

const app = express()

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

app.get('/jokes', (req, res) => {
    axios.get('https://official-joke-api.appspot.com/random_ten')
    res.json({})
})

const PORT = process.env.PORT || 9000

app.listen(PORT, () => console.log('hello, PORT', PORT))