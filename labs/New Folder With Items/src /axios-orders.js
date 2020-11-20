import axios from "axios"

const Instance = axios.create({
    baseURL : "https://burger-a2dc6.firebaseio.com"
})

export default Instance;