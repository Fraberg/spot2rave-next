import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Me from '@/views/Me.vue'

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
    path: '/me/:accesstoken',
    name: 'Me',
    props: true,
    component: Me
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
