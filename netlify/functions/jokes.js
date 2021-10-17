const axios = require("axios")

exports.handler = async function (event, context) {
    try {
        const response = await axios.get('https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart&amount=10')
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