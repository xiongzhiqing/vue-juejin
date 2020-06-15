import Vue from 'vue'
import VueRouter from 'vue-router'

import { routes as topic } from './module/topic/router.js'
import { compose } from './util/compose'
import { getPermissionByRole, PERMISSION_MAP } from './config/permission'
import store from './store'
Vue.use(VueRouter)
const getRole = () => store.state.user.role
const getPermission = (permission) => {
  /**
   * 1.getRole
   * 2.getPermissionByRole
   * 3.isPermissionOn
  */
  return compose(obj => obj[permission], getPermissionByRole, getRole)()
}
export default new VueRouter({
  routes: [...topic,
  {
    path: '/about',
    name: 'about',
    component: () => import('./views/UAbout.vue'),
    beforeEnter (to, from, next) {
      getPermission(PERMISSION_MAP.ABOUT_PAGE) ? next() : next('403')
    }
  },
  {
    path: '/403',
    name: '403',
    component: () => import('./views/403.vue')
  },
  {
    path: '/', redirect: '/hot'
  }]
})
