import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import HomeUser from '../views/HomeUser.vue'
import About from '../views/About.vue'
import Menu from '../views/Menu.vue'
import User from '../views/User.vue'
import SignUp from '../components/SignUp.vue'
import Login from '../components/Login.vue'
import Users from '../components/Users.vue'
import Bills from '../components/Bills.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/users',
    name: 'Users',
    component: Users
  },
  {
    path: '/bills',
    name: 'Bills',
    component: Bills
  },
  {
    path: '/home-user',
    name: 'HomeUser',
    component: HomeUser
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/menu',
    name: 'Menu',
    component: Menu
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
  // {
  //   path: '/about',
  //   name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
