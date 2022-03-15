<template>
<div>
  <div class="wrapper">
    <div class="intro">
      <h1>Welcome!</h1>
      <p>Its never been easier to create your weekly shopping list!</p> <p>Simply find some recipes you are wanting to make, click "Add Recipe" to add a recipe to your selected recipes.</p> <p> When you have all the recipes you are wanting to make, click "Generate List", and watch the magic happen. </p>
      </div>
    <div class="title">
    <h1>Under 30 Mins</h1>
      </div>
    <div class="Container">
      <div class="items">
        <RecipeList :recipes="recipesFast"/>
        </div>
      </div>
    <div class="title">
    <h1>Dinner</h1>
      </div>
    <div class="Container">
      <div class="items">
      <RecipeList :recipes="recipesDinner"/>
    </div></div>
    <div class="title">
    <h1>Lunch</h1>
      </div>
    <div class="Container">
      <div class="items">
      <RecipeList :recipes="recipesLunch"/>
    </div></div>
    <div class="title">
    <h1>Breakfast</h1>
      </div>
    <div class="Container">
      <div class="items">
      <RecipeList :recipes="recipesBreakfast"/>
    </div></div>
    <div class="title">
    <h1>Budget</h1>
      </div>
    <div class="Container">
      <div class="items">
    <RecipeList :recipes="recipesBudget"/>
    </div></div>
    <div class="title">
    <h1>Mexican</h1>
      </div>
    <div class="Container">
      <div class="items">
    <RecipeList :recipes="recipesMexican"/>
    </div></div>
    <div class="title">
    <h1>Asian</h1>
      </div>
    <div class="Container">
      <div class="items">
    <RecipeList :recipes="recipesAsian"/>
    </div>
    </div>
  </div>
  
</div>
</template>

<script>
import RecipeList from "../components/RecipeList.vue"
export default {
  name: 'Home-view',
  components: {
    RecipeList
  },
    data() {
    return {
      tag: '',
    }
  },
  computed: {
  recipesFast() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Under 30 minutes" || recipe.tags[1] === "Under 30 minutes" || recipe.tags[2] === "Under 30 minutes" ||recipe.tags[3] === "Under 30 minutes");
  },
  recipesDinner() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Dinner" || recipe.tags[1] === "Dinner" || recipe.tags[2] === "Dinner" ||recipe.tags[3] === "Dinner");
  },
  recipesLunch() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Lunch" || recipe.tags[1] === "Lunch" || recipe.tags[2] === "Lunch" ||recipe.tags[3] === "Lunch");
  },
  recipesBreakfast() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Breakfast" || recipe.tags[1] === "Breakfast" || recipe.tags[2] === "Breakfast" ||recipe.tags[3] === "Breakfast");
  },
  recipesBudget() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Budget" || recipe.tags[1] === "Budget" || recipe.tags[2] === "Budget" ||recipe.tags[3] === "Budget");
  },
  recipesMexican() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Mexican" || recipe.tags[1] === "Mexican" || recipe.tags[2] === "Mexican" ||recipe.tags[3] === "Mexican");
  },
  recipesAsian() {
    return this.$root.$data.recipes.filter(recipe => recipe.tags[0] === "Asian" || recipe.tags[1] === "Asian" || recipe.tags[2] === "Asian" ||recipe.tags[3] === "Asian");
  },
  containsTag(tags,tag){
      for(let i = 0; i < tags.length; i ++){
        if(tags[i]===tag){
          return true;
        }
      }
      return false;

    }
  },
  methods: {
    

  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 2em;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.title {
  margin-top: 100px;
  margin-left: 100px;
  width: 100%;
  text-align: left;
  color: #264653;
}
   .Container{
      width:80%;
      height:29em;
      background: #F0F0F0;
      display: flex;
      flex-wrap: nowrap;
      overflow-x: auto;
      overflow-y: hidden;
   }
   .intro {
     margin-left: 200px;
     margin-right: 200px;
     color: #264653;
     font-size: 30px;
   }
   .intro h1{
     color: #f4a261;
   }
   .items{
     flex: 0 0 auto;
   }
</style>
  

   