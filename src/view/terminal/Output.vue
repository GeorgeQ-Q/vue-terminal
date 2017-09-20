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
  props: ['push'],
  name: 'shellOutlist',
  data() {
    return {
    }
  },
  methods: {
    trim(str) {
      return str.replace(new RegExp(/[&nbsp;]\w+[&nbsp;]/), '')
    },
    checkCommand(val) {
      let _message = '> '
      switch (this.trim(val)) {
        case 'clear':
          this.$emit('update:push', [{}])
          break;
        case 'help':
          _message = 'commands have clear'
          break;
        default:
          _message += val + ' : command not found'
          break;
      }
      return _message;
    }
  }
}
</script>

<style>

</style>

