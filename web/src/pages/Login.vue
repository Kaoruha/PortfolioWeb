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
    <q-btn unelevated rounded color="green" label="TEST" @click="test"/>
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
        const params = {
          account: this.user,
          secret: this.pwd
        }
        const store = this.$store
        const url = 'local_api/user/login'
        this.$axios.post(url, params)
          .then(function (response) {
            const r = response.data
            switch (r.code) {
              case 200:
                store.commit('authorization/updateToken', r.data)
                break
              case 600:
                console.log('登陆失败')
                break
              case 602:
                console.log('登陆失败')
                break
            }
          })
          .catch(function (error) {
            console.log(error)
          })
      },
      test() {
        const t = localStorage.getItem('Authorization')
        console.log(t)
      }
    }
  }
</script>

<style scoped>

</style>
