const axios = require('axios')
require("dotenv").config();
const {API_KEY } = process.env



const getCharacterApi = async () => {

let page = 1

while (page < 6) {
    const response = await axios(`https://api.rawg.io/api/games?key=42625362b8614b5a93ff6be0aa8fa901&page=${page}`)

const characters = response.data.results.map(element =>{
    return{
        name: element.name,
        image: element.background_image,
        genre: element.genres.map(el => el.name),
       
    }})
    page++
return characters
}
}

module.exports={
    getCharacterApi
}