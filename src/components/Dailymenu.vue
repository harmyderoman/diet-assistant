<template>
    
  <v-container>
    <v-layout column>
    <v-toolbar-title>Daily Menu. You have {{ calories }} kcal</v-toolbar-title>

    <template>
      <v-progress-linear
        :color="colorOfProgress"
        height="20"
        :value="CaloriesProgress"
      ></v-progress-linear>
      <v-progress-linear
        v-if="CaloriesProgress>100"
        :color="error"
        height="20"
        :value="secondLine"
        
      ></v-progress-linear>
    </template>
    <!-- <v-flex>
      <v-btn color="success" @click="addCalories(500)">More Cal</v-btn>
      <v-btn color="warning" @click="addCalories(-500)">Less Cal</v-btn>
    </v-flex> -->
    </v-layout>
    
    <v-layout align-content-center column style="border: 1px solid black;">
    
      <v-toolbar-title >
          <h2 style="margin: auto auto;">Choose your meal for today! {{ mealList.toString() }}</h2>
      </v-toolbar-title>
      <v-flex row wrap offset-md2>
        <v-card
          style="margin-bottom: 20px;"
          v-for="(item, name) in items" :key="name"
          max-width="500px"
          hover
          >
          <v-img
            :src='item.image'
            height="200px"
          >
          </v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">{{ item.name }}</div>
              <span class="grey--text">{{ item.calories}} kCal</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn fab flat color="success" @click="addToMeal(item)">Add</v-btn>
            <v-spacer></v-spacer>
            <v-btn fab flat color="purple" @click="removeFromeMeal(item)">Remove</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
            
            </v-card-text>
          </v-slide-y-transition>
         
        </v-card>
        
      </v-flex>
    </v-layout>
  </v-container>

</template>

<script>
export default {
  data: () => ({
    CaloriesProgress: 0,
    calories: 0,
    show: false,
    // items: [
    //     {
    //       name: 'Frozen Yogurt',
    //       calories: 159,
    //       fat: 6.0,
    //       carbs: 24,
    //       protein: 4.0,
    //       course: 'dessert',
    //       image: 'https://www.thermomix.com.au/wp-content/uploads/2017/08/Sorbet_Landscape-600-x480.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Ice cream sandwich',
    //       calories: 237,
    //       fat: 9.0,
    //       carbs: 37,
    //       protein: 4.3,
    //       course: 'dessert',
    //       image: 'https://static01.nyt.com/images/2017/06/28/dining/28SANDWICH/28ICECREAMSANDWICH-articleLarge.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Eclair',
    //       calories: 262,
    //       fat: 16.0,
    //       carbs: 23,
    //       protein: 6.0,
    //       course: 'dessert',
    //       image: 'http://www.dinnerwithjulie.com/wp-content/uploads/2008/08/Espresso-Eclair-900x629-1.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Fried Potato',
    //       calories: 305,
    //       fat: 3.7,
    //       carbs: 67,
    //       protein: 4.3,
    //       course: 'entry',
    //       image: 'https://assets.marthastewart.com/styles/wmax-300/d32/md106529_msl_09_02_10_as_raw-229/md106529_msl_09_02_10_as_raw-229_vert.jpg?itok=Ojd1eChr',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //            {
    //       name: 'Pasta',
    //       calories: 159,
    //       fat: 6.0,
    //       carbs: 24,
    //       protein: 4.0,
    //       course: 'entry',
    //       image: 'https://images-gmi-pmc.edge-generalmills.com/23d91943-d830-4a24-898b-6772f268093b.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Burger',
    //       calories: 237,
    //       fat: 9.0,
    //       carbs: 37,
    //       protein: 14.3,
    //       course: 'main',
    //       image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Mushroom soup',
    //       calories: 262,
    //       fat: 16.0,
    //       carbs: 23,
    //       protein: 6.0,
    //       course: 'soup',
    //       image: 'https://www.tasteofhome.com/wp-content/uploads/0001/01/Dairy-Free-Cream-of-Mushroom-Soup_EXPS_THFM19_189095_B10_02_4b-696x696.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     },
    //     {
    //       name: 'Americano',
    //       calories: 35,
    //       fat: 6,
    //       carbs: 67,
    //       protein: 1,
    //       course: 'drink',
    //       image: 'https://www.homegrounds.co/wp-content/uploads/2018/01/americano-e1522545816957.jpg',
    //       howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
    //     }
    //   ],
    meal: [],
    mealList: []
  }),
  computed: {
    items(){
      return this.$store.getters.dishes
    },
    colorOfProgress(){
      var proc = this.CaloriesProgress
      if(proc<80){
        return 'success'
      } else if(proc>=80 && proc<95){
        return 'warning'
      } else{
        return 'error'
      }
    },
    // calories(){
    //   return this.meal.reduce((prev, cur)=>{
    //     return prev.calories + cur.calories
    //   })
    // },
    secondLine(){
      if(this.CaloriesProgress>=200){
        return 100
      }
      return this.CaloriesProgress%100
    }, 
    // CaloriesProgress(){
    //   return this.calories/2000*100
    // }
  },
  methods: {
    addCalories(cal){
      this.CaloriesProgress += (cal/2000*100)
    },
    addToMeal(dish){
      this.meal.push(dish)
      this.calories+= dish.calories
      this.CaloriesProgress += (dish.calories/2000*100)
      this.mealList.push(dish.name)
    },
    removeFromeMeal(dish){
      var index = this.meal.indexOf(dish)
      this.meal.splice(index, index)
      this.calories -= dish.calories
      this.CaloriesProgress -= (dish.calories/2000*100)
      var index2 = this.mealList.indexOf(dish.name)
      this.mealList.splice(index2, index2)
      
    }
  },
  watch: {
    // meal: ()=>{
    //   this.mealList = this.meal.map((item)=>{
    //     return item.name
    //   })
    // }
  }
}
</script>
