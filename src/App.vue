<template>
  <v-app>
     <v-navigation-drawer
    app
    temporary
    v-model="drawer"
  >
    <v-list>
      <v-list-group
        prepend-icon="account_circle"
        value="true"
      >
        <template v-slot:activator>
          <v-list-tile>
            <v-list-tile-title>User</v-list-tile-title>
          </v-list-tile>
        </template>
          <v-list-tile
            v-for="(ulink, i) in userlinks"
            :key="i"
            :to="ulink.link"
          >
            <v-list-tile-title v-text="ulink.title"></v-list-tile-title>
            <v-list-tile-action>
              <!-- <v-icon v-text="admin[1]"></v-icon> -->
            </v-list-tile-action>
          </v-list-tile>
      </v-list-group>
      <v-divider></v-divider>
      <v-list-tile
        flat
        v-for="(link, index) in mainlinks" 
        :key="index"
        :to="link.link">
        <v-list-tile-title>{{ link.title}}</v-list-tile-title>
        <v-list-tile-action
        
        >
          <!-- <v-icon>home</v-icon> -->
          
        </v-list-tile-action>
        
      </v-list-tile>

      
    </v-list>
  </v-navigation-drawer>
    
  <v-toolbar>
    
    <v-toolbar-side-icon
      class="hidden-md-and-up"
      @click="drawer = !drawer"
      ></v-toolbar-side-icon>
    <v-toolbar-title>Diet Assistant</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn 
      flat
      v-for="(link, index) in mainlinks"
      :key="index"
      :to="link.link"
      >
      {{ link.title }}
      </v-btn>
      
      
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
                :to="ulink.link"
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
      drawer: false,
      mainlinks: [
        { index: 1, title: "Daily Menu", link: "/"},
        { index: 2, title: "List Of Dishes", link: "/editdishes"},
      ],
      userlinks: [
        { index: 1, title: "User Info", link: "/user/userinfo"},
        { index: 2, title: "Diet Plan", link: "/user/plan"},
        { index: 3, title: "Edit", link: "/user/edit"},
      ]
    }
  }
}
</script>
