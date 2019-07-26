import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const moduleA = {
    state: {count: 0},
    mutations: {
        increment(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count++
        }
    },
    getters: {
        sumWithRootCount(state, getters, rootState) {
            return state.count + rootState.count
        },
        doubleCount(state) {
            return state.count * 2
        }
    },
    actions: {
        incrementIfOddOnRootSum({state, commit, rootState}) {
            if ((state.count + rootState.count) % 2 === 1) {
                commit('increment')
            }
        }
    }
}

const moduleB = {
    state: {count: 0},
    mutations: {
        incrementB(state) {
            // 这里的 `state` 对象是模块的局部状态
            state.count= state.count+2
        }
    },
    actions: {
        incrementIfOddOnRootSumB({commit}) {
            commit('increment')
        }
    },
    getters: {
        sumWithRootCount(state) {
            return state.count + 2
        }
    }
}

export default new Vuex.Store({
    modules: {
        a: moduleA,
        b: moduleB
    }
    // state: {
    //     count: 1,
    //     todos: [
    //         {id: 1, text: '...', done: true},
    //         {id: 2, text: '...', done: false}
    //     ]
    // },
    // mutations: {
    //     increment (state) {
    //         state.count++
    //     }
    // },
    // actions: {
    //     incrementAsync ({ commit }) {
    //         setTimeout(() => {
    //             commit('increment')
    //         }, 1000)
    //     },
    //     actionA ({ commit }) {
    //         return new Promise((resolve, reject) => {
    //             setTimeout(() => {
    //                 commit('someMutation')
    //                 resolve()
    //             }, 1000)
    //         })
    //     },
    //     actionB ({ dispatch, commit }) {
    //         return dispatch('actionA').then(() => {
    //             commit('someOtherMutation')
    //         })
    //     }
    //     // increment ({ commit }) {
    //     //     commit('increment')
    //     // }
    // },
    // getters: {
    //     setUserList(state, data) {
    //         state.userList = data;
    //     },
    //     doneTodos: state => {
    //         return state.todos.filter(todo => todo.done)
    //     },
    //     doneTodosCount: (state, getters) => {
    //         return getters.doneTodos.length
    //     },
    //     getTodoById: (state) => (id) => {
    //         return state.todos.find(todo => todo.id === id)
    //     }
    // },

})
