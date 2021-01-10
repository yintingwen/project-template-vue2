<template>
  <div id="app">
    <el-button type="primary" @click="handleClickXxx">{{ 1610261293099 | formatTimestamp }}</el-button>
    <!-- <custom-dialog :visible="true" :show-close="false">
      <div slot="title">hahahahahah</div>
      <div>我组成身体</div>
      <div slot="footer">我组成底部</div>
    </custom-dialog> -->
    <el-button>123123</el-button>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['hello', 'userNickname', 'userAgent'])
  },
  async created () {
    // tongxinyun({}, )
    // tongxinyun({
    // url: '/asdasd',
    // showMessage: true
    // })
  },
  methods: {
    async handleClickXxx () {
      try {
        await this.$customConfirm.disable({})
        this.$store.commit('userTest', '猪猪侠')
      } catch (error) {
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
