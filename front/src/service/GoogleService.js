import axios from 'axios'
const mockPlaylists = require('@/mock/mockPlaylists')

// GET https://youtube.googleapis.com/youtube/v3/playlists?part=snippet%2CcontentDetails%2Cid%2Clocalizations%2Cplayer%2Cstatus&mine=true HTTP/1.1

// Authorization: Bearer [YOUR_ACCESS_TOKEN]
// Accept: application/json

class GoogleService {

  // tracks
  static getUserPlaylists(token) {
    console.log('GoogleService | getUserPlaylists')
    const playlistsEndpoint = `https://www.googleapis.com/youtube/v3/playlists?access_token=${token}&part=snippet,contentDetails,id,localizations,player,status&mine=true&maxResults=50`
    console.log('playlistsEndpoint:', playlistsEndpoint)
    return new Promise((resolve, reject) => {
      axios
        .get(playlistsEndpoint)
        .then(res => {
          // console.log(res.data)
          console.log(JSON.stringify(res.data))
          let playlist = res.data.items.map(item => ({
            id: item.id,
            title: item.snippet.title,
            description: item.snippet.description,
            channelId: item.snippet.channelId,
            image_default: item.snippet.thumbnails.default.url,
            publishedAt: item.publishedAt,
            itemCount: item.contentDetails ? item.contentDetails.itemCount : 0,
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
  
  // tracks
  static getMockUserPlaylists(token) {
    console.log('GoogleService | getMockUserPlaylists')
    return new Promise((resolve, reject) => {
      let playlist = mockPlaylists.fifty.items.map(item => ({
        id: item.id,
        title: item.snippet.title,
        description: item.snippet.description,
        channelId: item.snippet.channelId,
        image_default: item.snippet.thumbnails.default.url,
        publishedAt: item.publishedAt,
        itemCount: item.contentDetails ? item.contentDetails.itemCount : 0,
      }))
      playlist = playlist.sort((a, b) => parseFloat(b.itemCount) - parseFloat(a.itemCount))
      resolve(playlist)
    })
  }
}

export default GoogleService
