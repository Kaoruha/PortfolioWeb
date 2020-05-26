<template>
  <div>
    <h1>Setting</h1>
    <input type="file">
    <q-btn @click="submit">提交</q-btn>
  </div>
</template>

<script>
  import Tag from '../api/tag.js'
  export default {
    name: 'Setting',
    components: {},
    data() {
      return {}
    },
    methods: {
      submit() {
        Tag.Upload()
        alert()
      }
    }
  }
</script>

<style scoped lang="scss">
</style>
