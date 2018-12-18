//展示的用户信息
const state = {
  //设置属性
  user: {}
}
const getters = {
  //获取属性的状态
  getUser: state => state.user
}
const mutations = {
  //改变属性的状态
  setUser(state, data) {
    state.user = data;
  }
}
const actions = {
  //应用mutaions
}
export default {
  state,
  getters,
  mutations,
  actions
}