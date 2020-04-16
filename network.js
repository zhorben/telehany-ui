import axios from 'axios'

const baseURL = process.env.NODE_ENV !== 'production'
  ? 'https://krasnoevino.ga'
  : 'http://localhost:3001'

export default axios.create({
  baseURL,
  validateStatus: status => {
    if (status === 401) {
      localStorage.removeItem('token')
      window.location.reload(true)
      return
    }
    return status <= 399
  }
})
