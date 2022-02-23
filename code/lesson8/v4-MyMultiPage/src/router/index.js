import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/gallery/',
      name: 'galery',
      component: () => import('../views/GalleryView.vue')
    },
    {
      path: '/contacts',
      name: 'contacts',
      component: () => import('../views/ContactsView.vue')
    },
    {
      path: '/pokemon',
      name: 'pokemonList',
      component: () => import('../views/PokemonListView.vue')
    },
    {
      path: '/pokemon/:pokemonName',
      name: 'pokemonDetails',
      component: () => import('../views/PokemonDetailView.vue')
    },
  ]
})

export default router
