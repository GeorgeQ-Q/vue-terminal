<template>
  <div id="console">
    <shell-outlist :push.sync="attribute" />
    <shell-input :shell.sync="shell" />
  </div>
</template>

<script>
import { shellOutlist, shellInput } from 'views/terminal/'
export default {
  props: ['layer'],
  components: {
    shellOutlist,
    shellInput
  },
  data() {
    return {
      attribute: [
        {
          prdfix_shell: 'Welcome to js-terminal, Type "help" for more information.'
        }
      ],
      shell: {
        prdfix: '$',
        shell: ''
      }
    }
  },
  methods: {
    mint(str) {
      this.$parent.mint(str)
    },
    move(str) {
      this.$parent.move(str)
    },
    copy(str) {
      this.$parent.copy(str)
    },
    mutate(str) {
      this.$parent.mutate(str)
    },
    delate(str) {
      this.$parent.delate(str)
    },
    revoke(str) {
      this.$parent.revoke(str)
    },
    newcs(str) {
      return this.$parent.newcs(str)
    }
  },
  computed: {},
  watch: {
    shell(val) {
      this.attribute.push({
        prdfix_shell: val.prdfix + ' ' + val.shell,
        shell: val.shell
      })
    }
  }
}
</script>

<style>

</style>
