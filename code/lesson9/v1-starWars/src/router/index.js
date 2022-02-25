import { createRouter, createWebHistory } from 'vue-router'
import MoviesView from '../views/MoviesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'movies',
      component: MoviesView
    },
    {
      path: '/characters',
      name: 'characters',
      component: () => import('../views/CharactersView.vue')
    },
    {
      path: '/planets',
      name: 'planets',
      component: () => import('../views/PlanetsView.vue')
    },
    {
      path: '/spaceships',
      name: 'spaceships',
      component: () => import('../views/SpaceshipsView.vue')
    },
    {
      path: '/movies/:movieId',
      name: 'movieDetails',
      component: () => import('../views/MovieDetailView.vue')
    }
  ]
})

export default router
