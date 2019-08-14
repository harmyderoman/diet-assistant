<template>
  <v-container grid-list-xs>
    
    <h1>
    Edit info of {{user.name}}
    </h1>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field>

    <v-text-field
      v-model="weight"
      :rules="weightRules"
      label="Weight in kilograms"
      required
      type="number"
    ></v-text-field>

    <v-text-field
      v-model="height"
      :rules="heightRules"
      label="height in centimeters"
      required
      type="number"
    ></v-text-field>

    <v-select
      v-model="sex"
      :items="sexes"
      :rules="[v => !!v || 'Sex is required']"
      label="Sex"
      required
    ></v-select>

<v-text-field
      v-model="age"
      :rules="ageRules"
      label="Age in years"
      required
      type="number"
    ></v-text-field>

    <v-card-text>
      <v-layout align-center>
        <v-checkbox v-model="enabledFat" hide-details class="shrink mr-2"></v-checkbox>
        <v-text-field 
        v-model="fat"
        :rules="(enabledFat)? fatRules : []"
        :disabled="!enabledFat" 
        type="number"
        label="Fat persent in your body. Only if you know"
        ></v-text-field>
      </v-layout>
    </v-card-text>

    <v-card-text class="pt-0">
      <v-slider
        v-model="activity"
        :rules="activityRules"
        label="Your fisical activity 5 levels"
        min="1"
        step="0.2"
        max="2"
        thumb-label="always"
        ticks
        :tick-labels="levels"
      ></v-slider>
    </v-card-text>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree to submit your info?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      @click="validate"
    >
      Submit
    </v-btn>

    <v-btn
      color="error"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn>
  </v-form>
  
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      valid: true,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ],
      weight: '',
      weightRules: [
        v => !!v || 'Weight is required',
        v => (v && v > 0) || 'Weight must be valid'
      ],
      height: '',
      heightRules: [
        v => !!v || 'Height is required',
        v => (v && v > 0) || 'Height must be valid'
      ],
      age: '',
      ageRules: [
        v => !!v || 'Age is required',
        v => (v && v > 0) || 'Age must be valid'
      ],
      sex: null,
      sexes: [
        'Male',
        'Female'
      ],
      checkbox: false,
      activity: 1,
      activityRules: [
          v => v > 1 || 'Level 1.2 is minimum'
        ],
      levels: [
        '0',
        'sedentary lifestyle',
        'mild activity',
        'average activity',
        'high activity',
        'extremely high'
      ],
      fat: null,
      fatRules: [
        // v => (typeof(v) == String) || 'Must be a Number',
        v => (v < 100 && v >= 0) || 'Precent of fat must be valid'
      ],
      enabledFat: false
    }),
    computed: {
      user(){
        return this.$store.getters.user
      }
    },

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          this.snackbar = true
          const name = this.name, weight = this.weight, height = this.height, age = this.age, sex = this.sex, fat =this.fat, activity = this.activity
          this.$store.dispatch('setNewUser', {name, weight, height, age, sex, fat, activity})
          this.$router.push('/user/userinfo')
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      }
    },
    watch: {
      enabledFat(val){
        if(!val){
          this.fat = null
        }
      }
    }
  }
</script>