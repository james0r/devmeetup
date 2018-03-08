<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-side-icon @click="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-toolbar-title>
        DevMeetup
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items>
        <v-btn flat>
          <v-icon left>supervisor_account</v-icon>
          View Meetups
          </v-btn>
        </v-toolbar-items>
    </v-toolbar>
      <v-navigation-drawer v-model="sideNav">
        <v-list>
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>supervisor_account</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              View Meetups
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
    <main>

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
  name: 'App'
}
</script>
