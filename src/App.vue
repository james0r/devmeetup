<template>
  <v-app>
      <v-navigation-drawer v-model="sideNav" fixed app>
        <v-list>
          <v-list-tile 
          v-if="userEmailExists"
          :userEmail="userEmail">
            <v-list-tile-title class="title" style="text-transform: uppercase">
              Hello, {{ userEmail }}
            </v-list-tile-title>
          </v-list-tile>
          <v-list-tile 
          v-for="item in menuItems" 
          :key="item.title"
          router
          :to="item.link">
          <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              {{ item.title}}
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile 
          router
          v-if="userIsAuthenticated"
          @click="onLogout">
          <v-list-tile-action>
              <v-icon>exit_to_app</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              Logout
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <v-toolbar dark class="primary">
      <v-toolbar-side-icon @click="sideNav = !sideNav" class="hidden-md-and-up"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">DevMeetup</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn 
        v-for="item in menuItems" 
        :key="item.title" 
        flat
        :to="item.link">
          <v-icon left>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn
        v-if="userIsAuthenticated" 
        flat
        @click="onLogout">
          <v-icon left>exit_to_app</v-icon>
          Logout
        </v-btn>
        <v-btn
        v-if="userEmailExists" 
        flat
        v-bind:userEmail="userEmail">
          <v-icon left>account_circle</v-icon>
          {{ userEmail }}
        </v-btn>
        </v-toolbar-items>
    </v-toolbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems () {
      let menuItems = [
        { icon: 'face', title: 'Sign Up', link: '/signup'},
        { icon: 'lock_open', title: 'Sign In', link: '/signin'}
      ]
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
          { icon: 'room', title: 'Create Meetup', link: '/meetup/new'},
          { icon: 'person', title: 'Profile', link: '/profile'}
        ]
      }
      return menuItems
    },
    userEmail () {
      let tempString = 'Not Logged In.'
      if (this.userEmailExists) {
        tempString = this.$store.getters.user.email
      } 
      return tempString
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userEmailExists () {
      if (this.userIsAuthenticated) {
        return this.$store.getters.user.email !== null && this.$store.getters.user.email !== undefined
      }
    }
  },
  methods: {
    onLogout () {
      this.$store.dispatch('logout')
    }
  },
  name: 'App'
}
</script>
