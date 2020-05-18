<template>
  <q-scroll-area class="fit">
    <q-list v-for="(menuItem, index) in menuList" :key="index" >

      <q-item clickable :active="menuItem.label === 'Outbox'" v-ripple :to="menuItem.url">
        <q-item-section avatar>
          <q-icon :name="menuItem.icon" />
        </q-item-section>
        <q-item-section>
          {{ menuItem.label }}
        </q-item-section>
      </q-item>

      <q-separator v-if="menuItem.separator" />

    </q-list>
  </q-scroll-area>
</template>


<script>
  export default {
    name: 'Header',
    data() {
      return {
        menuList:[
          {
            icon: 'inbox',
            label: 'General',
            separator: true,
            url:'/manager/general'
          },
          {
            icon: 'android',
            label: 'User',
            separator: false,
            url:'/manager/user'
          },
          {
            icon: 'account_balance',
            label: 'Works',
            separator: false,
            url:'/manager/works'
          },
          {
            icon: 'assignment_ind',
            label: 'Portfolio',
            separator: true,
            url:'/manager/portfolio'
          },
          {
            icon: 'bookmarks',
            label: 'Tags',
            separator: false,
            url:'/manager/tags'
          },
          {
            icon: 'settings',
            label: 'Settings',
            separator: false,
            url:'/manager/setting'
          },
          {
            icon: 'help',
            iconColor: 'primary',
            label: 'Help',
            separator: false,
            url:'/manager/help'
          }
        ]
      }
    },
  }
</script>


<style lang="sass">
</style>






