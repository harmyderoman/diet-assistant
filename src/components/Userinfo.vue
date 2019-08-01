<template>
  
  <v-container>
    <h1>
    User Info: {{ user.name}}
    </h1>
    <v-spacer></v-spacer>
    <v-flex>
      <v-simple-table>
      <thead>
        <tr>
          <th class="text-left">\</th>
          <th class="text-left">Value</th>
          <th class="text-left">Units</th>
        </tr >
      </thead>
      <tbody class="tab">
        <tr>
        <td>Weight</td>
        <td>{{ user.weight }}</td>
        <td> kg</td>
        </tr>
        <tr>
        <td>Height</td>
        <td>{{ user.height }}</td>
        <td>cm</td>
        </tr>
        <tr>
        <td>Age</td>
        <td>{{ user.age }}</td>
        <td> years</td>
        </tr>
        <tr>
        <td>Sex</td>
        <td>{{ user.sex }}</td>
        <td> - </td>
        </tr>
        <tr>
        <td>Fat</td>
        <td>{{ user.fat }}</td>
        <td> %</td>
        </tr>
        <tr>
        <td>Activity</td>
        <td>{{ user.activity }}</td>
        <td> level</td>
        </tr>
      </tbody>
    </v-simple-table>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="secondary" :to="'/user/edit'">Update Info</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
    </v-flex>
  </v-container>
</template>

<script>
export default {
  computed: {
    user(){    
      return this.$store.getters.user
    }
  }
}
</script>

<style scoped>
.tab {
  font-family: "Lucida Sans Unicode", "Lucida Grande", Sans-Serif;
  font-size: 16px;
  border-collapse: collapse;
  text-align: center;
}
th, td:first-child {
  background: #AFCDE7;
  color: white;
  padding: 15px 50px;
}
th, td {
  border-style: solid;
  border-width: 0 1px 1px 0;
  border-color: white;
}
td {
  background: #D8E6F3;
}
th:first-child, td:first-child {
  text-align: left;
}
</style>
