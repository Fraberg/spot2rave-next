import axios from 'axios'
const mockArtists = require('./mockArtists')
const mockEvents = require('./mockEvents')

const artistUrl = 'api/ticketmaster/artist/'
const eventsUrl = 'api/ticketmaster/events/'

class TicketMasterService {
  static getArtists() {
    console.log('TicketMasterService | getArtists')
    return new Promise((resolve, reject) => {
      axios
        .get(artistUrl)
        .then(res => {
          const data = res.data
          console.log(JSON.stringify(data))
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  static getMockArtists() {
    console.log('TicketMasterService | getMockArtists')
    return new Promise((resolve, reject) => {
        resolve(mockArtists.artists)
    })
  }
  static getEvents(artistId) {
    console.log('TicketMasterService | getEvents')
    return new Promise((resolve, reject) => {
      axios
        .get(eventsUrl, { params: { artistId } })
        .then(res => {
          const data = res.data
          console.log(data)
          resolve(data)
        })
        .catch(err => {
          reject(err)
        })
    })
  }
  static getMockEvents(artistId) {
    console.log('TicketMasterService | getMockEvents')
    return new Promise((resolve, reject) => {
        resolve(mockEvents.events)
    })
  }
}

export default TicketMasterService
