import axios from 'axios'
const mockData = require('./mockData')

const topTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks'
const UserEndpoint = 'https://api.spotify.com/v1/me'

class SpotifyService {

  // user
  static getUser(token) {
    console.log('SpotifyService | getUser')
    // console.log('topTracksEndpoint:', topTracksEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(UserEndpoint, {
          headers: {
            authorization: 'Bearer ' + token,
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          console.log(res.data)
          // const items = res.data.items
          resolve(res.data)
        })
        .catch((err) => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }
  static getMockUser(token) {
    console.log('SpotifyService | getMockUser')
    // console.log('topTracksEndpoint:', topTracksEndpoint)
    return new Promise((resolve, reject) => {
      resolve(mockData.user.data)
    })
  }

  // tracks
  static getTopTrack(token) {
    console.log('SpotifyService | getTopTrack')
    // console.log('topTracksEndpoint:', topTracksEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(topTracksEndpoint, {
          headers: {
            authorization: 'Bearer ' + token,
            'content-type': 'application/json',
          },
        })
        .then((res) => {
          // console.log(res.data)
          const items = res.data.items
          resolve(
            items.map((item) => ({
              id: item.id,
              name: item.name,
              artists: item.artists.map((artist) => artist.name),
              release_date: item.release_date,
              popularity: item.popularity,
              image: item.album.images[item.album.images.length - 1].url,
            }))
          )
        })
        .catch((err) => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }
  static getMockTopTrack(token) {
    console.log('SpotifyService | getMockTopTrack')
    return new Promise((resolve, reject) => {
      resolve(
        mockData.topTracks.items.map((item) => ({
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          release_date: item.release_date,
          popularity: item.popularity,
          image: item.album.images[item.album.images.length - 1].url,
        }))
      )
    })
  }
}

export default SpotifyService
