<template>
  <canvas ref="myCanvas" id="canvas"></canvas>
</template>

<script>
export default {
  data() {
    return {
      layer: 0
    }
  },
  methods: {
    trim(str) {
      // console.log(typeof str)
      const inputs = str.split(',')
      inputs[inputs.length - 1] = inputs[inputs.length - 1].replace(')', '')
      return inputs
    },
    mint(str) {
      const inputs = this.trim(str)
      console.log(inputs)
    },
    move(str) {
      console.log(str)
    },
    mutate(str) {
      console.log(str)
    },
    delate(str) {
      console.log(str)
    },
    revoke(str) {
      console.log(str)
    },
    copy(str) {
      console.log(str)
    },
    newcs(dig) {
      const inputs = this.trim(dig)
      if (inputs.length !== 1) {
        return 'error only one input'
      }
      if (isNaN(inputs[0])) {
        return 'error isnot a number'
      }
      const digs = parseInt(inputs[0])
      if (digs > 3 || digs < 1) {
        return 'error should between 1-3'
      }
      switch (digs) {
        case 1:

          break;
        case 2:

          break;
        case 3:

          break;
        default:

      }
      const canvas = this.$refs.myCanvas
      const context = canvas.getContext('2d');
      context.fillStyle = 'green';
      context.strokeStyle = 'green';
      context.strokeRect(20 + 150 * i, 2 + 170 * this.layer, 150, 150);
      // console.log(i)
      // draw font in red
      context.fillStyle = 'red';
      context.font = '16pt sans-serif';
      context.fillText('Capability A', 25 + 150 * i, 100 + 170 * this.layer);
      return 'nice and done'
    }
  },
  mounted() {
    const canvas = this.$refs.myCanvas
    const context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
    context.beginPath();
    console.log(this.layer)
    this.newcs('9')
    this.newcs('9')
  }
}
</script>

<style>

</style>
