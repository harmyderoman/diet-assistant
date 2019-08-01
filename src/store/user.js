export default {
  state: {
    user: {
      name: 'Roma',
      weight: 92,
      height: 187,
      age: 32,
      sex: 'male',
      fat: 30,
      activity: 1
    }
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    }
  },
  actions: {
    setNewUser({commit},{name, weight, height, age, sex, fat, activity}) {
      if(fat === ''){
        fat = 0
      }
      const user = {name, weight, height, age, sex, fat, activity}
      commit('setUser', user)
    }
  },
  getters:{
    user(state){
      return state.user
    }
  }
}