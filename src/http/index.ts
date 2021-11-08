import axios from 'axios'

export const API_URL = `https://app.com/api`

const $api = axios.create({
    baseURL: API_URL
    //baseURL: process.env.API_URL
 })

 export default $api