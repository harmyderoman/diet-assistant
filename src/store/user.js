export default {
  state: {
    user: {
      name: 'Roma',
      weight: 92,
      height: 187,
      age: 32,
      sex: 'Male',
      fat: 30,
      activity: 1
    },
    plan: {
      calories: 0,
      fblevel: 3,
      formula: null
    }
  },
  mutations: {
    setUser(state, payload){
      state.user = payload
    },
    setPlan(state, payload){
      state.plan = payload
    }
  },
  actions: {
    setNewUser({commit},{name, weight, height, age, sex, fat, activity}) {
      if(fat === ''){
        fat = null
      }
      const user = {name, weight, height, age, sex, fat, activity}
      commit('setUser', user)
    },
    setNewPlan({commit}, {calories, fblevel,formula}){
      const plan = {calories, fblevel,formula}
      commit('setPlan', plan)
    }
  },
  getters:{
    user(state){
      return state.user
    }
  }
}