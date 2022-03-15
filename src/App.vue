<template>
<div id="app">
  <div id="banner">
    <div id="title">
    <h1>Listly</h1>
    <p>Let us make your shopping list</p>
    </div>
    <div id="menu">
      <div id="side">
        <router-link to="/">
          <div class="menu-item">
            <p>Home</p>
          </div>
        </router-link>
        <router-link to="/recipes">
          <div class="menu-item">
            <p>Browse</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item">
            <p>List</p>
          </div>
        </router-link>
      </div>
      </div>

    </div>
    <div id="selected-recipes">
      <div id="selected-recipes-title">
        <h1>Selected Recipes</h1>
      </div>
      <div id="selected-recipes-container">
        
        <h2 v-if="empty" class="empty">No recipes selected</h2>
        <SelectedRecipes :recipes="recipes" v-else />
      </div>
      <div id="selected-recipes-button">
        <router-link to="/list">
          <button>Generate List</button>
        </router-link>
        
      </div>
    </div>
    <router-view /> 
</div>
</template>

<script>
  import SelectedRecipes from "../src/components/SelectedRecipes.vue"
  export default {
    name: 'Home-view',
    components: {
      SelectedRecipes
    },
      data() {
      return {
      }
    },
    computed: {
    recipes() {
      return this.$root.$data.selected;
    },
    total(){
      return this.$root.$data.selected.length;  
    },
    empty(){
        return (this.$root.$data.selected.length ==0);
    }
    },
  }
</script>

<style>

* {
  box-sizing: border-box;
}


#selected-recipes{
  height: 20em;
}

#selected-recipes h2{
  height: 30px;
} 
#selected-recipes-title{
  width: 50%;
  text-align: center;
  color: #264653;
}
#selected-recipes-container{
  margin-left: auto;
  margin-right: auto;
  justify-self: center;
  overflow-x: auto;
  overflow-y: auto;
  white-space: nowrap;
  width: 50em;
  height: 12em;
  border: solid 2px #e9c46a;
  color: #264653;


}
#selected-recipes-button{
  margin-top: 20px;
  display: flex;
  justify-content: center;
  
}
#selected-recipes-button button{
  background: #e76f51;
  padding: 10px;

  font-size: 30px;
  border: none;
  color: white;  
}

#banner{
height: 18em;

background-image: linear-gradient(0deg,rgba(38, 70, 83, 0.75) ,  rgba(38, 70, 83, 0.75)), url("/images/banner.jpg");
background-position: center;
background-size: cover;
display: flex;
flex-direction: column;
justify-content: flex-end;  
}
#title{
  color: white;
  font-size: 30px;
  text-align: center;
}
#menu {
  width:100%;
  padding-left: 50px;
  margin-bottom: 10px;
}

#menu a {
  font-size: 24px;
  color: white;
  text-decoration: none;
}
.active {
  
  color: #e76f51;
  
}

#side {
  grid-area: side;
  display: flex;
  
}

#side img {
  width: 50px;
}

.menu-item {
  display: flex;
  flex-direction: column;
}

.menu-item p {
  margin: 0px;
  margin-right: 50px;
}

</style>
