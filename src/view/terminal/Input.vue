<template>
  <div>
    <span v-html>
      {{ prdfix }} <span v-html="left"></span><span v-bind:class="{ blink: isActive }" v-html="current"></span><span v-html="right"></span>
    </span>

  </div>
</template>

<script>
export default {
  props: ['shell'],
  data() {
    return {
      isActive: true,
      prdfix: '$',
      left: '',
      right: '',
      current: '&nbsp;',
      _current: '',
      current_num: 0,
      full_shell: ''
    }
  },
  watch: {
    left(val) {
      let full_shell = val;
      this.isActive = false;
      if (this.current_num !== 0) {
        full_shell += this.current;
      }
      full_shell += this.right;
      this.full_shell = full_shell
    },
    // current() {
    //   this.right = this.current + this.right;
    //   if (this.current_num < -1) this.right = this.right.substring(1);
    // },
    current_num(val) {
      this.right = this.full_shell.substring(this.full_shell.length + (val + 1))
      this.left = this.full_shell.substring(0, this.full_shell.length + val)
      this.current = this.full_shell.substring(this.full_shell.length + (val + 1), this.full_shell.length + val)
    }
  },
  mounted() {
    setInterval(() => {
      this.isActive = this.isActive ? false : true
    }, 800)
  },
  created() {
    document.addEventListener('keypress', e => {
      // console.log(e.which);
      if (e.which === 32) {       // space
        this.left += '&nbsp;'
      } else if (e.which !== 13) { // enter
        this.left += String.fromCharCode(e.which);
      }
    })
    document.addEventListener('keydown', e => {
      // console.log(e.which)
      const input = this.left;
      if (e.which === 8) {
        e.preventDefault();
        if (input.length !== 0) {
          if (input.length >= 6 && input.lastIndexOf('&nbsp;') === input.length - 6) {
            this.left = input.substring(0, input.length - 6);
          } else {
            this.left = input.substring(0, input.length - 1);
          }
        }
      } else if (e.which === 13) {
        this.$emit('update:shell', {
          prdfix: this.prdfix,
          shell: this.full_shell
        })
        this.left = this.right = this.current = ''
      } else if (e.which === 37) { // to left
        if (this.left.length !== 0) this.current_num--;
      } else if (e.which === 39) {
        if (this.right.length !== 0) this.current_num++;
      }
    })
  }
}
</script>

<style>
.blink {
  background-color: gray;
  color: #000;
  /* width: 12px; */
}
</style>

