<template>
  <div id="app">
    <div id = "div">
      <Terminal id = "left"></Terminal>
    </div>
    <Canvas id = "right"></Canvas>
  </div>
</template>

<script>
import Canvas from './view/terminal/Canvas.vue'
import Terminal from './view/terminal/Terminal.vue'
export default {
  name: 'app',
  components: {
    Canvas,
    Terminal
  },
  data() {
    return {
      layer: 0
    }
  },
  methods: {
    mint(str) {
      this.$children[1].mint(str)
    },
    copy(str) {
      this.$children[1].copy(str)
    },
    move(str) {
      this.$children[1].move(str)
    },
    mutate(str) {
      this.$children[1].mutate(str)
    },
    delate(str) {
      this.$children[1].delate(str)
    },
    revoke(str) {
      this.$children[1].revoke(str)
    },
    newcs(str) {
      return this.$children[1].newcs(str)
    }
  },
  created() {
    document.addEventListener('keypress', e => {
      // console.log(e.which);
      if (e.which === 13) { // enter
        const objDiv = document.getElementById('left');
        objDiv.scrollTop = objDiv.scrollHeight;
        // trying to get the String
      }
    })
  }
}
</script>

<style>
#left::-webkit-scrollbar-track
{
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
	border-radius: 10px;
	background-color: #26292C;
}

#left::-webkit-scrollbar
{
	width: 6px;
}

#left::-webkit-scrollbar-thumb
{
	border-radius: 10px;
	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color:lightcyan;
}
#app {
  zoom: 1;
  font-family: 'Source Code Pro', sans-serif;
  /* background-color:rgb(61, 63, 66); */
  font-size: 0.9em;
  color: white;
}
#left {
  max-width:100%;
  width:100%;
  max-height:700px;
  background-color: #26292C;
  float: left;
  overflow: auto;
}
#right {
  max-width:60%;
  max-height:100%;
  float: right;
  color: black;
}
#div {
  max-width:40%;
  width:40%;
  max-height:700px;
  background-color: #26292C;
  float: left;
  height:700px;
}
</style>
