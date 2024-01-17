import axios from 'axios'
import { VITE_API_KEY, VITE_API_URL } from './constants'

export const httpClient = axios.create({
  baseURL: VITE_API_URL,
  params: {
    appid: VITE_API_KEY
  }
})
