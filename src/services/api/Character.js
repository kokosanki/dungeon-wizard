import axios from 'axios'

export default {
  getClasses () {
    return axios.get('/classes')
      .then(response => {
        return response.data.results
      })
  },
  getRaces () {
    return axios.get('/races')
      .then(response => {
        return response.data.results
      })
  },
  getAlignments () {
    return axios.get('/alignments')
      .then(response => {
        return response.data.results
      })
  }
}
