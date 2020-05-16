<template>
  <div>
    <div class="card center">
      <div class="left">
        <h2>Welcome</h2>
        <q-input class="input" outlined v-model="user" label="Username" placeholder="Good Good Study！"
                 hint="Please input your username." :dense="dense"></q-input>

        <q-input class="input" outlined v-model="pwd" label="Password" placeholder="Day Day UP！"
                 :type="isPwd ? 'password' : 'text'" hint="Please input your password." :dense="dense">
          <template v-slot:append>
            <q-icon
              :name="isPwd ? 'visibility_off' : 'visibility'"
              class="cursor-pointer"
              @click="isPwd = !isPwd"
            />
          </template>
        </q-input>

        <q-btn unelevated rounded color="primary" label="Login Now" @click="login"/>
      </div>
      <div class="right"></div>


    </div>
  </div>
</template>

<script>
  import User from '../api/user.js'

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
        const store = this.$store
        User.Login(this.user, this.pwd).then(function (response) {
          console.log('VUE=====')
          console.log(response)
          console.log('VUE=====')
          switch (response.code) {
            case 200:
              User.tokenUpdate(response.data)
              store.commit('authorization/updateToken', response.data)
              break
            case 400:
              break
          }
        })
      },
    }
  }
</script>

<style scoped lang="scss">
  .center {
    margin-left: 50%;
    transform: translateX(-50%);
  }

  .card {
    height: 500px;
    border-radius: 14px;
    box-shadow: 0px 0px 8px #888888;
    width: 800px;
    margin-top: 80px;
  }


  .left {
    display: inline-block;
    height: 100%;
    width: 64%;
    padding: 0 40px;

    h2 {
      font-weight: 800;
    }

    .input{
      margin-bottom: 20px;
    }
  }


  .right {
    background-color: red;
    display: inline-block;
    right: 0;
    height: 100%;
    width: 36%;
  }

</style>
