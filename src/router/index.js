import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import NavBar from '../components/NavBar.vue'
import LocationModal from '../components/LocationModal.vue'
import FoodRestaurant from '../views/FoodRestaurant.vue'
import SweetsRestaurant from '../views/SweetsRestaurant.vue'
import Orders from '../views/Orders.vue'
import Profile from '../views/Profile.vue'
import Login from '../views/Login.vue'
import Checkout from '@/views/Checkout.vue'
import Footer from '@/components/Footer.vue'
import Contact from '@/views/Contact.vue'
import SpecialOreders from '@/views/SpecialOreders.vue' 
const routes = [
  { path: '/HomeView', name: 'HomeView', component: Home },
  { path: '/', name: 'Home', component: Home },
  { path: '/NavBar', name: 'NavBar', component: NavBar },
  { path: '/Location', name: 'LocationModal', component: LocationModal, meta: {title: ' سجل - مذاق الأندلس للحلويات ' } },
  { path: '/food-restaurant', name: 'FoodRestaurant', component: FoodRestaurant, meta: {title: ' مذاق النبلاء للمأكولات - مذاق الأندلس للحلويات ' } },
  { path: '/sweets-restaurant', name: 'SweetsRestaurant', component: SweetsRestaurant , meta: {title: '  مذاق الأندلس للحلويات ' }},
  { path: '/Orders', name: 'Orders', component: Orders , meta: {title: ' السلة - مذاق الأندلس للحلويات ' }},
  { path: '/Profile', name: 'Profile', component: Profile },
  { path: '/Login', name: 'Login', component: Login },
  { path: '/checkout', name: 'Checkout', component: Checkout, meta: {title: ' فاتورتك - مذاق الأندلس للحلويات ' } },
  { path: '/Footer', name: 'Footer', component: Footer },
  { path: '/contact', name: 'Contact', component: Contact , meta: {title: '  اتصل بنا- مذاق الأندلس للحلويات ' }},
  { path: '/special-orders', name: 'SpecialOreders', component: SpecialOreders , meta: {title: ' عروض المناسبات والحفلات - مذاق الأندلس للحلويات ' } },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
router.beforeEach((to, from, next) => {
  console.log('NAVIGATE to:', to.name, to.path)
  const userLocation = localStorage.getItem('userLocation')

  if (!userLocation) {
    // Allow access to these public pages without location
    // These are pages users can browse before setting their location
    const publicPages = [
      'Home', 
      'HomeView',
      'LocationModal', 
      'Contact', 
      'SpecialOreders',
      'FoodRestaurant',
      'SweetsRestaurant'
    ]
    if (!publicPages.includes(to.name)) {
      next({ name: 'Home' })
      return
    }
  }
  next()
})
router.beforeEach((to, from, next) => {
  // تغيير الـ title بناءً على meta
  document.title = to.meta.title || 'مذاق الأندلس للحلويات'
  next()
})

export default router
