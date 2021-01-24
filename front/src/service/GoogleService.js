import axios from 'axios'
const mockPlaylists = require('@/mock/mockPlaylists')
const mockPlaylistItems = require('@/mock/mockPlaylistItems')

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cid%2Clocalizations%2Cplayer%2Cstatus&mine=true HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

class GoogleService {

  // playlists
  static getUserPlaylists(token) {
    console.log('GoogleService | getUserPlaylists')
    const playlistsEndpoint = `https://www.googleapis.com/youtube/v3/playlists?access_token=${token}&part=snippet,contentDetails,id,localizations,player,status&mine=true&maxResults=50`
    console.log('playlistsEndpoint:', playlistsEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(playlistsEndpoint)
        .then(res => {
          // console.log(res.data)
          // console.log(JSON.stringify(res.data))
          let playlist = res.data.items.map(item => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            channelId: item.snippet.channelId,
            image_default: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            itemCount: item.contentDetails.itemCount,
            channelTitle: item.snippet.channelTitle,
          }))
          playlist = playlist.sort((a, b) => parseFloat(b.itemCount) - parseFloat(a.itemCount))
          resolve(playlist)
        })
        .catch(err => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }
  
  // playlists
  static getMockUserPlaylists(token) {
    console.log('GoogleService | getMockUserPlaylists')
    return new Promise((resolve, reject) => {
      let playlist = mockPlaylists.fifty.items.map(item => ({
        id: item.id,
        publishedAt: item.snippet.publishedAt,
        channelId: item.snippet.channelId,
        title: item.snippet.title,
        description: item.snippet.description,
        image_default: item.snippet.thumbnails.default.url,
        channelTitle: item.snippet.channelTitle,
        itemCount: item.contentDetails.itemCount,
      }))
      playlist = playlist.sort((a, b) => parseFloat(b.itemCount) - parseFloat(a.itemCount))
      resolve(playlist)
    })
  }

  // playlistItems
  static getPlaylistItems(token, playlistId) {
    console.log('GoogleService | getPlaylistItems')
    console.log('token', token)
    console.log('playlistId', playlistId)
    // const pageToken = '1'
    const playlistItemsEndpoint = `https://www.googleapis.com/youtube/v3/playlistItems?access_token=${token}&part=snippet,contentDetails,id,status&playlistId=${playlistId}&mine=true&maxResults=50`
    console.log('playlistItemsEndpoint:', playlistItemsEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(playlistItemsEndpoint)
        .then(res => {
          let items = res.data.items.map(item => ({
            id: item.id,
            title: item.snippet.title,
            playlistId: item.snippet.playlistId,
            description: item.snippet.description,
            image_default: item.snippet.thumbnails.default.url,
            publishedAt: item.snippet.publishedAt,
            position: item.snippet.position,
          }))
          items = items.sort((a, b) => parseFloat(a.position) - parseFloat(b.position))
          resolve(items)
        })
        .catch(err => {
          console.log('err:', err)
          // reject(err)
          resolve([])
        })
    })
  }

  // playlistItems
  static getMockPlaylistItems(token, playlistId) {
    console.log('GoogleService | getMockPlaylistItems')
    // console.log('token', token)
    // console.log('playlistId', playlistId)
    return new Promise((resolve, reject) => {
      let items = mockPlaylistItems.page1.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        playlistId: item.snippet.playlistId,
        description: item.snippet.description,
        image_default: item.snippet.thumbnails.default.url,
        publishedAt: item.snippet.publishedAt,
        position: item.snippet.position,
      }))
      items = items.sort((a, b) => parseFloat(a.position) - parseFloat(b.position))
      resolve(items)
    })
  }
}

export default GoogleService
