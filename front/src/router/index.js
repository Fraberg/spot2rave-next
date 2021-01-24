import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Me from '@/views/Me.vue'
import Google from '@/views/Google.vue'
import Track from '@/views/Track.vue'
import Playlist from '@/views/Playlist.vue'
import Artist from '@/views/Artist.vue'
import More from '@/views/More.vue'
import Compare from '@/views/Compare.vue'
import Events from '@/views/Events.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/more',
    name: 'More',
    component: More
  },
  {
    path: '/me/:accesstoken',
    name: 'Me',
    props: true,
    component: Me
  },
  {
    path: '/google',
    name: 'Google',
    component: Google
  },
  {
    path: '/ymplaylist/:id',
    name: 'Playlist',
    props: true,
    component: Playlist
  },
  {
    path: '/me/track/:id',
    name: 'Track',
    props: true,
    component: Track
  },
  {
    path: '/me/artist/:id',
    name: 'Artist',
    props: true,
    component: Artist
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  {
    path: '/compare',
    name: 'Compare',
    component: Compare
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

// router.beforeEach((to, from, next) => {
//   // Redirect if fullPath begins with a hash (ignore hashes later in path)
//   console.log('beforeEach')
//   console.log('to.fullPath', to.fullPath)
//   if (to.fullPath.substr(0,2) === '/#') {
//       const path = to.fullPath.substr(2)
//       console.log('path', path)
//       next(path)
//       return
//   }
//   next()
// })

export default router
