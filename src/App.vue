<template>
  <v-app>
  <v-toolbar>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Diet Assistant</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat>Link One</v-btn>
      <v-btn flat>Link Two</v-btn>
      
      
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
              flat
                color="primary"
                dark
                v-on="on"
              >
                User
              </v-btn>
            </template>
            <v-list>
              <v-list-tile
                v-for="(ulink, index) in userlinks"
                :key="index"
                @click=""
              >
                <v-list-tile-title>{{ ulink.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
     
      
    </v-toolbar-items>
  </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      userlinks: [
        { index: 1, title: "User Info"},
        { index: 2, title: "Diet Plan"},
      ]
    }
  }
}
</script>
