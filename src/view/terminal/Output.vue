<template>
  <div>
    <div class="output-view" v-for="(item, index) in push">
      <span v-html="item.prdfix_shell"></span>
      <div class="message" v-if="index !== 0" v-html="checkCommand(item.shell)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['push', 'layer'],
  name: 'shellOutlist',
  data() {
    return {

    }
  },
  methods: {
    trim(str) {
      return str.replace(new RegExp('[&nbsp;]+[&nbsp;]'), '')
    },
    checkCommand(val) {
      // console.log(this.push)
      let _message = '> '
      console.log(val)
      console.log(this.trim(val))
      switch (this.trim(val)) {
        case 'clear':
          this.$emit('update:push', [{}])
          break;
        case 'help':
          _message = 'commands have clear'
          break;
        default: {
          const _funcname = this.trim(val).slice(0, 7)
          switch (_funcname) {
            case 'cnmint(':
              this.$parent.mint(this.trim(val).slice(7))
              _message = 'mint()'
              break;
            case 'cncopy(':
              this.$parent.copy(this.trim(val).slice(7))
              _message = 'copy()'
              break;
            case 'cnmove(':
              this.$parent.move(this.trim(val).slice(7))
              _message = 'move()'
              break;
            case 'mutate(':
              this.$parent.mutate(this.trim(val).slice(7))
              _message = 'mutate()'
              break;
            case 'delate(':
              this.$parent.delate(this.trim(val).slice(7))
              _message = 'delate()'
              break;
            case 'revoke(':
              this.$parent.revoke(this.trim(val).slice(7))
              _message = 'revoke()'
              break;
            case 'newcso(':
              _message = this.$parent.newcs(this.trim(val).slice(7))
              break;
            default:
              _message += val + ' : command not found'
              break;
          }
          break;
        }

      }
      // this.scrollToEnd();
      return _message;
    }
    /* crollToEnd() {
      const container = this.$el.querySelector('#output-view');
      container.scrollTop = container.scrollHeight;
    } */
  }
}
</script>

<style>

</style>
