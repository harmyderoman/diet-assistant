import Vue from 'vue'
import Vuex from 'vuex'
// import author from './author'
import dishes from './dishes'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        dishes,
        user
    }
})