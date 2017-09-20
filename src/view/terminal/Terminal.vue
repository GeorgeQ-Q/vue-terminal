<template>
  <div id="console">
    <shell-outlist :push.sync="attribute" />
    <shell-input :shell.sync="shell" />
  </div>
</template>

<script>
import { shellOutlist, shellInput } from 'views/terminal/'
export default {
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
