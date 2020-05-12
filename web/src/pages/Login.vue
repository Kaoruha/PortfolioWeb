<template>
  <div>
    <h1>this is login page!</h1>
    <q-input outlined v-model="user" label="Username" placeholder="Good Good Study！"
             hint="Please input your username." :dense="dense"></q-input>

    <q-input outlined v-model="pwd" label="Password" placeholder="Day Day UP！"
             :type="isPwd ? 'password' : 'text'" hint="Please input your password." :dense="dense">
      <template v-slot:append>
        <q-icon
          :name="isPwd ? 'visibility_off' : 'visibility'"
          class="cursor-pointer"
          @click="isPwd = !isPwd"
        />
      </template>
    </q-input>

    <q-btn unelevated rounded color="primary" label="Login" @click="login"/>
  </div>
</template>

<script>
  export default {
    name: 'List',
    components: {},
    data() {
      return {
        isPwd: true,
        dense: false,
        user: '',
        pwd: '',
      }
    },
    methods: {
      login() {
        var params = {
          account: this.user,
          secret: this.pwd
        }
        var url = 'local_api/user/login';
        this.$axios.post(url, params)
          .then(function (response) {
            console.log(response.data);
          })
          .catch(function (error) {
            console.log(error.data)
          });
      }
    }
  }
</script>

<style scoped>

</style>
