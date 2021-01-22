import axios from 'axios'
const mockUser = require('@/mock/mockUser')
const mockTopTracks = require('@/mock/mockTopTracks')
const mockTopArtists = require('@/mock/mockTopArtists')

const UserEndpoint = 'https://api.spotify.com/v1/me'
const topTracksEndpoint = 'https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50'
const topArtistsEndpoint = 'https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50'

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
            'content-type': 'application/json'
          }
        })
        .then(res => {
          console.log(res.data)
          // const items = res.data.items
          resolve(res.data)
        })
        .catch(err => {
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
            'content-type': 'application/json'
          }
        })
        .then(res => {
          // console.log(res.data)
          // console.log(JSON.stringify(res.data))
          const items = res.data.items
          resolve(
            items.map(item => ({
              id: item.id,
              name: item.name,
              artists: item.artists.map(artist => artist.name),
              release_date: item.release_date,
              popularity: item.popularity,
              image_high: item.album.images[0].url,
              image_med: item.album.images[1].url,
              image_low: item.album.images[2].url
            }))
          )
        })
        .catch(err => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }
  static getMockTopTracks(token) {
    console.log('SpotifyService | getMockTopTracks')
    return new Promise((resolve, reject) => {
      resolve(
        mockTopTracks.long_term.items.map(item => ({
          id: item.id,
          name: item.name,
          artists: item.artists.map(artist => artist.name),
          release_date: item.release_date,
          popularity: item.popularity,
          // image: item.album.images[1].url,
          image_high: item.album.images[0].url,
          image_med: item.album.images[1].url,
          image_low: item.album.images[2].url
        }))
      )
    })
  }

  // artists
  static getTopArtists(token) {
    console.log('SpotifyService | getTopArtists')
    // console.log('topArtistsEndpoint:', topArtistsEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(topArtistsEndpoint, {
          headers: {
            authorization: 'Bearer ' + token,
            'content-type': 'application/json'
          }
        })
        .then(res => {
          console.log(res.data)
          // console.log(JSON.stringify(res.data))
          const items = res.data.items
          resolve(
            items.map(item => ({
              id: item.id,
              type: item.type,
              name: item.name,
              genre: item.genre,
              followers: item.followers,
              popularity: item.popularity,
              uri: item.uri,
              href: item.href,
              external_urls: item.external_urls,
              image_high: item.images[0].url,
              image_med: item.images[1].url,
              image_low: item.images[2].url
            }))
          )
        })
        .catch(err => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }
  static getMockTopArtists(token) {
    console.log('SpotifyService | getMockTopArtists')
    return new Promise((resolve, reject) => {
      resolve(
        mockTopArtists.long_term.items.map((item) => ({
          id: item.id,
          type: item.type,
          name: item.name,
          genres: item.genres,
          followers: item.followers,
          popularity: item.popularity,
          uri: item.uri,
          href: item.href,
          external_urls: item.external_urls,
          image_high: item.images[0].url,
          image_med: item.images[1].url,
          image_low: item.images[2].url
        }))
      )
    })
  }
}

export default SpotifyService
