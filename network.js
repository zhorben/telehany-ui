import axios from 'axios'

console.log(process.env.NODE_ENV)

export default axios.create({
  // baseURL: 'http://localhost:3001',
  baseURL: 'https://krasnoevino.ga',
  validateStatus: status => {
    if (status === 401) {
      localStorage.removeItem('token')
      window.location.reload(true)
      return
    }
    return status <= 399
  }
})
