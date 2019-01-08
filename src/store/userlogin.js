import vc from 'vue-cookie'
import http from '../components/http.js'

export default {
  state: {
    userlogin: vc.get('userlogin') ? JSON.parse(vc.get('userlogin')) : {},
  },
  mutations: {
    login(state, payload) {
      // state.islogin = true
      // if (payload.data && payload.data.status === 200) {
      //   state.userInfo = payload.data.content
      //   setStore('Token', state.userInfo.token)
      //   setStore('userInfo', state.userInfo)
      // }
      state.userlogin = payload.userlogin || {}
      state.userlogin.token = payload.token
      var expiresDate = new Date()
      expiresDate.setTime(expiresDate.getTime() + (1000 * 60 * 90))
      // expiresDate.setTime(expiresDate.getTime() + (1000 * 5))
      vc.set('userlogin', JSON.stringify(state.userlogin), {expires: expiresDate})
    },
  },
  actions: {
    login({ commit }, info) {
      return http.post('admin/login/in', info).then(res => {
        if (res.data.code == 200) {
          // commit('login', res)
          commit('login', {
            token: res.data.data
          })
        }
        return res
      })
    }
  }
}
