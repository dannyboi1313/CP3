<template>
<div class="wrapper">
  <div class="recipes">
    <div class="recipe" v-for="recipe in recipes" :key="recipe.id">
        <div class="button-container">
          <button @click="removeItem(recipe)" class="auto">X</button>
        </div>
        <div class="image">
            <img :src="'/images/'+recipe.image">
        </div>
        <div class="info">
          <h1>{{recipe.name}}</h1>
        </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'RecipeList',
  props: {
    recipes: Array
  },
  methods: {
    removeItem(recipe) {
        //let temp =[];
        let id = recipe.id;
        
        this.$root.$data.selected = this.$root.$data.selected.filter(item => item.id != id);
        let list = recipe.ingredients;
        let copy = [...this.$root.$data.ingredients];
       for(let i = 0; i < list.length; i ++){
          
          for(let j = 0; j <  copy.length; j ++){
              if(list[i].ingredient == copy[j].ingredient){
                let newQuan =copy[j].quantity - list[i].quantity;
               console.log(newQuan);
                if( newQuan > 0){
                  
                  copy[j].quantity= newQuan;
                }
                else{
                  copy.splice(j, 1);
                }
                
              }
          }
          
        }
        this.$root.$data.ingredients = copy;
      }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.recipes {
  margin-top: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.recipe {
  margin: 10px;
  margin-bottom: 10px;
  padding: 5px;
  inline-size: 50px;
  overflow-wrap: break-word;
  color: #000;
  height: 150px;
  width: 150px;
  text-align: center;
  white-space: normal;
  position: relative;
}
.button-container{
  z-index: 1;
  height:40px;
  width: 130px;
  position:absolute;
  display: flex;
  flex-direction: row-reverse;
}
.button-container button{
  height:25px;
  width: 25px;
  text-align: center;
  border-radius: 50%;
}

.recipe img {
  height: 100px;
  width: 100px;
  
  border-radius: 50%;
  
}

.recipe .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info{
  width:150px;
  overflow-wrap:break-words;
  
}

.recipe h1 {
  font-size: 12px;
}

.recipe h2 {
  font-size: 14px;
  
}

.recipe p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>