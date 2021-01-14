import axios from 'axios'
const mockTopTracks = require('./mockTopTracks')
const mockUser = require('./mockUser')

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
      resolve(mockUser.user.data)
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
              image_high: item.album.images[0].url,
              image_med: item.album.images[1].url,
              image_low: item.album.images[2].url,
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
        mockTopTracks.topTracks.items.map((item) => ({
          id: item.id,
          name: item.name,
          artists: item.artists.map((artist) => artist.name),
          release_date: item.release_date,
          popularity: item.popularity,
          // image: item.album.images[1].url,
          image_high: item.album.images[0].url,
          image_med: item.album.images[1].url,
          image_low: item.album.images[2].url,
        }))
      )
    })
  }
}

export default SpotifyService
