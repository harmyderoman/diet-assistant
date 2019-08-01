<template>
    
     <v-container fluid grid-list-md>
       
    
    <v-switch v-model="expand" :label="(expand) ? 'Expand Multiple' : 'Expand Single'"></v-switch>
    <v-item-group multiple>
        <v-subheader>Sort Dishes by Tags. Your meal is: {{mealNames.toString().replace(/,/gi, ", ")}}</v-subheader>
        <v-item
          sele
          v-for="n in tags"
          :key="n"
        >
          <v-chip
            slot-scope="{ active, toggle }"
            :selected="active"
            @click="toggle, sortByTag(n)"
          >
            {{ n }}
          </v-chip>
        </v-item>
      </v-item-group>
      <v-divider></v-divider>
      <v-spacer></v-spacer>
    <v-data-iterator
      :items="sortedItems"
      item-key="name"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      content-tag="v-layout"
      :expand="expand"
      row
      wrap
    >
          <template v-slot:header>
        <v-toolbar
          class="mb-2"
          color="secondary darken-5"
          dark
          flat
        >
          <v-toolbar-title>Choose dish for today meal!</v-toolbar-title>
          
        </v-toolbar>
      </template>
      <template v-slot:item="props">
        <v-flex
          xs12
          sm6
          md4
          lg3
        >
          <v-card>
               <v-img 
                  :src="props.item.image"
                  aspect-ratio="1"
                  ></v-img> 
            <v-card-title>
              <h4>{{ props.item.name }}</h4>
            </v-card-title>
            <v-switch
              v-model="props.expanded"
              :label="(props.expanded) ? 'Close info' : 'Show info'"
              class="pl-3 mt-0"
            ></v-switch>
            <v-btn flat color="success" @click="addToMeal(props.item)">Add This Dish</v-btn>

            <!-- <v-btn color="error">-</v-btn> -->
            <v-divider></v-divider>
            <v-list v-if="props.expanded" dense>
              
              <v-list-tile>
                <v-list-tile-content>Calories:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Fat:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Carbs:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Protein:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Course:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.course }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Learn how to cook: </v-list-tile-content>
                <!-- <v-list-tile-content class="align-end">{{ props.item.howtocook }}</v-list-tile-content> -->
                <v-list-tile-content class="align-end"><a :href="props.item.howtocook " >Follow link</a></v-list-tile-content>
              </v-list-tile>
              <!-- <v-list-tile>
                <v-list-tile-content>Iron:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
              </v-list-tile> -->
            </v-list>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      expand: false,
      rowsPerPageItems: [4, 8, 12],
      pagination: {
        rowsPerPage: 8
      },
      sortedItems: 
       [
         {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          course: 'dessert',
          image: 'https://www.thermomix.com.au/wp-content/uploads/2017/08/Sorbet_Landscape-600-x480.jpg',
          howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
         }
       ],
     
      meal: [],
      mealNames: []
      // asctiveTags: []
    }),
    computed: {
      tags(){
        let tags = new Array
        tags = [ 'all'].concat(this.items.map((item)=>{
          return item.course
        }))
        tags
        let filterTags = tags.filter(function(item, pos) {
          return tags.indexOf(item) == pos;
        })
        return filterTags
      },
      items(){
        return this.$store.getters.dishes
      }
    },
    created(){
      this.sortByTag('all')
    },
    methods: {
      // addToActiveTags(n){
      //     this.asctiveTags.push(n)
      // },
      sortByTag(tag) {
        if(tag === 'all'){
          this.sortedItems = this.items
        } else{
          this.sortedItems = this.items.filter(dish => dish.course === tag)
        }
      },
      addToMeal(item){
        this.meal.push(item)
        this.mealNames.push(item.name)
      }
      
    },
    watch: {
    //   asctiveTags: (oldAtags, newAtags)=>{
    //     this.sortedItems.push(this.items.filter(item=> this.asctiveTags.includes( item.course)))
    //   },
    }
  }
</script>