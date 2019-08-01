export default {
  state: {
    dishes: [
      {
        name: 'Frozen Yogurt',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        course: 'dessert',
        image: 'https://www.thermomix.com.au/wp-content/uploads/2017/08/Sorbet_Landscape-600-x480.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Ice cream sandwich',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 4.3,
        course: 'dessert',
        image: 'https://static01.nyt.com/images/2017/06/28/dining/28SANDWICH/28ICECREAMSANDWICH-articleLarge.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Eclair',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        course: 'dessert',
        image: 'http://www.dinnerwithjulie.com/wp-content/uploads/2008/08/Espresso-Eclair-900x629-1.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Fried Potato',
        calories: 305,
        fat: 3.7,
        carbs: 67,
        protein: 4.3,
        course: 'entry',
        image: 'https://assets.marthastewart.com/styles/wmax-300/d32/md106529_msl_09_02_10_as_raw-229/md106529_msl_09_02_10_as_raw-229_vert.jpg?itok=Ojd1eChr',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
             {
        name: 'Pasta',
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        course: 'entry',
        image: 'https://images-gmi-pmc.edge-generalmills.com/23d91943-d830-4a24-898b-6772f268093b.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Burger',
        calories: 237,
        fat: 9.0,
        carbs: 37,
        protein: 14.3,
        course: 'main',
        image: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2017/5/10/0/FNM_060117-Smashburger-Style-Burgers-Recipe_s4x3.jpg.rend.hgtvcom.616.462.suffix/1494459418304.jpeg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Mushroom soup',
        calories: 262,
        fat: 16.0,
        carbs: 23,
        protein: 6.0,
        course: 'soup',
        image: 'https://www.tasteofhome.com/wp-content/uploads/0001/01/Dairy-Free-Cream-of-Mushroom-Soup_EXPS_THFM19_189095_B10_02_4b-696x696.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      },
      {
        name: 'Americano',
        calories: 35,
        fat: 6,
        carbs: 67,
        protein: 1,
        course: 'drink',
        image: 'https://www.homegrounds.co/wp-content/uploads/2018/01/americano-e1522545816957.jpg',
        howtocook: 'https://www.thermomix.com.au/unrealfood/berry-frozen-yoghurt/'
      }
    ]
  },
  mutations: {
  },
  actions: {},
  getters: {
    dishes(state){
      return state.dishes
    }
  }
}