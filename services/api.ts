import axios from 'axios'

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  headers: { 'Content-Type': 'application/json' }
})

api.interceptors.request.use((config) => {
  console.log('Request was sent to:', config.url)
  return config
}, (error) => Promise.reject(error))

api.interceptors.response.use((response) => {
  console.log('Response received from:', response.config.url)
  return response
}, (error) => {
  console.log('Error response from:', error.response.config.url)
  return Promise.reject(error)
})

export default api
