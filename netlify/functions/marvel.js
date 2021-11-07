const axios = require('axios')
const md5 = require('md5')

let ts = new Date().getTime()
let message = ts + process.env.API_PRIVATE + process.env.API_KEY

let hash = md5(message)
console.log(hash)

exports.handler = async function (event, context) {
    try {
        const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?limit=50&ts=${ts}&apikey=${process.env.API_KEY}&hash=${hash}`)
        return {
            statusCode: 200,
            body: JSON.stringify(response.data)
        }
    } catch(e) {
        return {
            statusCode: 404,
            body: e.toString()
        }
    }
}