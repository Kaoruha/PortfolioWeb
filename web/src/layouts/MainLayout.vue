<template>
  <q-layout view="hHh lpR fFf">

    <Header></Header>
    <q-page-container>
      <router-view/>
    </q-page-container>

  </q-layout>
</template>

<script>
  import Header from "../components/Header";

  export default {
    components: {
      Header,
    },
    data() {
      return {}
    }
  }
</script>
