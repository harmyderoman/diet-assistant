<template>
  <v-container grid-list-xs>
    <h1>Diet Plan </h1>
    <tbody class="tab">
      <tr>
        <td>Daily Calories Consumption</td>
        <td> {{ calories }}</td>
        <td> kCal</td>
      </tr>
      <tr>
        <td>Fat burning Style</td>
        <td> {{ fblevels[fblevel] }} </td>
        <td> {{ fblevel }} level</td>
      </tr>
      <tr>
        <td>Consumption Formula</td>
        <td>{{ radios }}</td>
        <td> {{ (radios=== "Mifflin")?'no need fat':'fat needed'}} </td>
      </tr>
      <tr>
        <td>Activity Level</td>
        <td>{{ levels[levelIndex] }}</td>
        <td>{{ activity }} level </td>
      </tr>
    </tbody>
    <v-form v-model="valid">
      <v-container>
        <v-radio-group v-model="radios" column>
          <label> {{ radios }}</label>
          <v-radio label="Mifflin Formula" value="Mifflin"></v-radio>
          <v-radio :disabled="!user.fat" label="Catch Formula(fat persent needed)" value="Catch"></v-radio>
        </v-radio-group>
        <v-layout column>
          <v-flex xs12>
            <v-card-text class="pt-0">
              <v-slider
                v-model="fblevel"
                :rules="fblevelRules"
                label="Your diet plan"
                min="0"
                step="1"
                max="5"
                thumb-label="always"
                ticks
                :tick-labels="fblevels"
                color="warning"
              ></v-slider>
            </v-card-text>
          </v-flex>
          <v-flex xs12>
            <v-card-text class="pt-0">
              <v-slider
                v-model="activity"
                label="Your fisical activity 5 levels"
                min="1"
                step="0.2"
                max="2"
                thumb-label="always"
                ticks
                :tick-labels="levels"
              ></v-slider>
            </v-card-text>
            <v-btn
            :disabled="!valid"
            color="success"
            @click="validate"
          >
            Save
          </v-btn>
          </v-flex>
          
        </v-layout>
      </v-container>
    </v-form>
     
   </v-container>
</template>

<script>
// import { maxHeaderSize } from 'http';
var burn  = function(level, calories){
        switch(level){
          case 0: return calories;
          case 1: return calories*0.8;
          case 2: return calories *0.9;
          case 3: return calories *1;
          case 4: return calories *1.1;
          case 5: return calories *1.2;
      }
}

export default {
  data: () => ({
    radios: 'Mifflin',
    fblevel: 2,
    fblevels: [
      '',
      'agresive burn',
      'fat burn',
      'save mass',
      'gain mass',
      'agressive gain'
    ],
    fblevelRules: [
        v => v > 0 || 'Choose your fat burn plan'
      ],
    activity: 1,
    
    levels: [
      "don't change",
      'sedentary lifestyle',
      'mild activity',
      'average activity',
      'high activity',
      'extremely high'
    ],
  }),
  computed:{
    levelIndex(){
      return ((this.activity*10 - 10)/2)
    },
    user(){
      return this.$store.getters.user
    },
    calories(){
      if(this.radios=== "Mifflin"){
        if(this.user.sex === "Male"){
          return Math.round(burn(this.fblevel, 9.99*this.user.weight + 6.25*this.user.height - 4.92*this.user.age + 5))
        } else{
          return  Math.round(burn(this.fblevel, 9.99*this.user.weight + 6.25*this.user.height - 4.92*this.user.age - 161))
        }
//         Для мужчин: BMR = [9.99 x вес (кг)] + [6.25 x рост (см)] - [4.92 x возраст (в годах)] + 5
// Для женщин: BMR = [9.99 x вес (кг)] + [6.25 x рост (см)] - [4.92 x возраст (в годах)] -161


      } else{
        let lbm = this.user.weight*(100 - this.user.fat)/100
        return Math.round(burn(this.fblevel,370 + 21.6*lbm))
        // BMR = 370 + (21.6 x LBM) Где LBM = [вес (кг) x (100 - %жира)]/100
      }
    }
  },
  methods: {
    savePlan(){
      let calories = this.calories
      let fblevel = this.fblevel
      let formula = this.radios
      this.$store.dispatch('setNewPlan',{calories, fblevel, formula})
    }
  }

}

</script>
 