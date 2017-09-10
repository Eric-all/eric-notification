<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br><br><br>
    <button @click="handler">Click</button>
  </div>
</template>

<script>
import Notification from './components/notice'
const notification = Notification.newInstance({})
import './components/notice/style/index.less'

export default {
  name: 'app',
  methods: {
    handler () {
      notification.notice({
        content: '<span>simple show</span>',
        onClose () {
          console.log('simple close')
        }
      })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
