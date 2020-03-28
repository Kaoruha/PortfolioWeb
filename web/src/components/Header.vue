<template>
  <q-header elevated class="header" height-hint="96">

    <q-tabs align="left">
      <q-route-tab to="/page1" label="Commercial"/>
      <q-route-tab to="/page2" label="None-commercial"/>
      <q-route-tab to="/page3" label="About"/>
      <div class="logo">
      </div>
      <div class="right">
        <q-avatar
          color="primary"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          color="primary"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          color="primary"
          text-color="white"
          icon="directions"
        />
        <q-avatar
          color="primary"
          text-color="white"
          icon="directions"
        />
      </div>
    </q-tabs>
  </q-header>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {}
    },
  }
</script>


<style lang="sass">
  .header
    background-color: #1D1D1D
    height: 120px

  .q-tab__content
    height: 120px
    font-size: 18px
    line-height: 24px
    &:hover
      background-color: red

  .q-focus-helper
    background-color: blue

  .right
    background-color: red

  .logo
    background-color: green
    width: 200px
    height: 100%
    margin: 0 auto

  .q-avatar
    /*margin: 0 10px*/
</style>






