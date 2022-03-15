<template>
<div class="wrapper">
  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
      
      <div class="image">
              <div class="overlay"> 
              <p>{{recipe.cost}}</p>
              <p>{{recipe.totalTime.time}} {{recipe.totalTime.units}}</p>
            </div>
            <img :src="'/images/'+recipe.image">
        </div>
      <div class="info">
      <star-rating class="stars" 
                  @rating-selected ="setRating"
                   active-color="#e9c46a"
                   star-size = 25
                   v-bind:increment="0.5"
                   v-bind:show-rating=false>
        </star-rating>
        <h1>{{recipe.name}}</h1>
        <div class="description">
          <h2>{{recipe.description}}</h2>
            <p >Tags: {{recipe.tags}},</p>
 
          
        </div>
        
        <button @click="addItem(recipe)" class="auto">Add Recipe</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import StarRating from 'vue-star-rating'
export default {
  name: 'RecipeList',
  props: {
    recipes: Array,
  },
  components: {
    StarRating
  },
  computed: {
    tagsToString(tags){
        let str = "";
        for(let i = 0; i < tags.length; i++){
            str = str + " " +tags[i]; 
        }
        return str;
    }
  }
  ,
  methods: {
    setRating(recipe,rating) {
      console.log(recipe);
      console.log(rating);
      this.rating = recipe;
    },

    addItem(recipe) {
      let id = recipe.id;
      let exists = false;
      this.$root.$data.selected.forEach(element => {
        if(element.id === id){
          exists = true;
        }
      });
      if(exists){
        alert("Recipe Already Added");
        return;}
      this.$root.$data.selected.push(recipe);
      let list = recipe.ingredients;
      //let duplicate = false
      //let copy = [...this.$root.$data.ingredients]
      list.forEach(element=>{
    
      this.$root.$data.ingredients.push(element);
        
      })

    },
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.stars {
  margin-left: auto;
  margin-right: auto;
}
.tags{
  width: 100%;
  height: 10px;
  background: #f4a261;
  display: flex;


}

.recipes {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-top: 10px;
  width: 300px;
  height: 410px;
  background: white;
  text-align: center;
  box-shadow: 10px 10px 8px #888888;
}

.recipe img {
  height: 200px;
  width: 300px;
  object-fit: cover;
  margin-left: 0;
}
.recipe img, .overlay {
    box-sizing: border-box; /* required */
    width: 100%; /* required */
    flex: none; /* required */
}
.overlay p{
  color: white;
}
.overlay {
  padding-left: 15px;
  padding-right: 15px;
  background: rgba(38, 70, 83, 0.75);
  position: absolute;
  height: 40px;
  display: flex;
  justify-content: space-between;
}
.recipe .image {
  margin-bottom: 5px;
  position: relative;
  
}

.info {
  color: #264653;
  display: flex;
  flex-direction: column;
  align-content: space-between;
}

.description{
  height: 90px;
  width: 100%;
}

.info h1 {
  font-size: 18px;
}

.info h2 {
  font-size: 16px;
}

.info p {
  margin: 4px;
  font-size: 12px;
}


.price {
  display: flex;
}

button {
  height: 30px;
  border-radius: 5%;
  background: #f4a261;
  color: white;
  border: none;
  font-size: 24px;
  margin-left: auto;
  margin-right: auto;
}

.auto {
  margin-left: auto;
}
</style>