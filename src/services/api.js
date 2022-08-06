import axios from "axios";

const api =axios.create({
    baseURL:'https://api.github.com'
    // baseURL:' https://pokeapi.co/api/v2/pokemon/'
})

export default api