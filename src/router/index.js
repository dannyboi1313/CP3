import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RecipeView from '../views/Recipes.vue'
import ShoppingListView from '../views/ShoppingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/recipes',
    name: 'recipe-view',
    component: RecipeView
  },
  {
    path: '/list',
    name: 'list-view',
    component: ShoppingListView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
