<template>
  <div id="app">
    <Header/>
    <div class="appContent">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import store from '@/store'
import controller from '@/services/Controller'

export default {
  name: 'App',
  store,  // vuex-store
  components: {
    Header,
    Footer
  },

  // 테스트용 코드 created에 있음
  created() {
    this.getPortfolios()
    this.getPosts()
  },
  methods: {
    getPortfolios: async function() {
      var temp = await controller.getPortfolios()
      store.commit('setPortfolios', {portfolios : temp})
    },
    getPosts: async function() {
      var temp = await controller.getPosts()
      store.commit('setPosts', {posts : temp})
    }
  }
}
</script>

<style>
  .appContent {
    margin-bottom : 50px;
  }
</style>