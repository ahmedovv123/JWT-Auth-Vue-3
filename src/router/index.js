import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Profile from '../views/Profile.vue'
import BoardAdmin from '../views/BoardAdmin.vue'
import BoardModerator from '../views/BoardModerator.vue'
import BoardUser from '../views/BoardUser.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile,
  },
  {
    path: '/admin',
    name: 'BoardAdmin',
    component: BoardAdmin,
  },
  {
    path: '/mod',
    name: 'BoardModerator',
    component: BoardModerator,
  },
  {
    path: '/user',
    name: 'BoardUser',
    component: BoardUser,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
