import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        portfolios: [],
        posts: []
    },
    mutations: {
        setPortfolios(state, payload) {
            state.portfolios = payload.portfolios
        },
        setPosts(state, payload) {
            state.posts = payload.posts
        }
    },
    getters: {
        getPortfolios: function(state) {
            return state.portfolios
        },
        getPosts: function(state) {
            return state.posts
        }
    }
})