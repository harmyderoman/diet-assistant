import Vue from 'vue'
import Router from 'vue-router'
import Dailymenu from './components/Dailymenu.vue'
import Userinfo from './components/Userinfo.vue'
import Dietplan from './components/Dietplan.vue'
import Editinfo from './components/Editinfo.vue'
import Editdishes from './components/Editdishes.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'dailymenu',
            component: Dailymenu
          },
        {
            path: '/user/userinfo',
            name: 'userinfo',
            component: Userinfo
          },
        {
            path: '/user/plan',
            name: 'plan',
            component: Dietplan
          },
        {
            path: '/user/edit',
            name: 'edit',
            component: Editinfo
          },
        {
            path: '/editdishes',
            name: 'editdishes',
            component: Editdishes
          }
    ],
    mode: 'history'
})