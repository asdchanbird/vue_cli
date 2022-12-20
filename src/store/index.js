import { createStore } from 'vuex'

export default createStore({
  state: {
    name: '🐢',
		food: ['🍔']
},
getters: {
    foodCount (state) {
      return state.food.length
    }
},
mutations: {
    setName (state, payload) {
      //state.name += '🐢'
      state.name = payload
    },
    setFood (state, payload) {
			//像是購物車，更新完vuex state再更新localstorage
			state.food = payload
    }
},
actions: {
    changeName (context) {
			//像是登入後取得帳戶資訊
      context.commit('setName')
    },
    getFood (context, payload) {
			fetch('...')
			.then(res=>res.json())
			.then(res=>{
	      context.commit('setFood', res)
			})
    }
}
})
