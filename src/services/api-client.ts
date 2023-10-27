import axios from "axios";

export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key:'16537415d53a4b31ba6d1b04fe3f54d8'
    }
})