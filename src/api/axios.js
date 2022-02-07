import axios from "axios"
const instance = axios.create({
    baseURL:"https://sleepy-chamber-34494.herokuapp.com"
    // baseURL:"http://localhost:5000"
})
export default instance;