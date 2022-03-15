<template>
<div class="wrapper">
    <div id="warning" v-if="empty">No recipes selected</div>
    <table v-else class="table table-striped table-bordered">
            <thead>
                <tr>
                    <th>Item</th>
                    <th></th>
                    <th></th>
                    <th>Quantity</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
          <tr v-for="ingredient in ingredients" :key="ingredient.ingredient">
                    <td>{{ingredient.ingredient}}</td>
                    <td> </td>
                    <td> </td>
                    <td>{{ingredient.quantity}} {{ingredient.measurement}}</td>
                    <td> </td>
                    <td><button @click="removeItem(ingredient)" class="auto">X</button></td>
          </tr>
          </tbody>
        </table>
</div>
</template>

<script>
export default {
  name: 'IngredientList',
  props: {
    ingredients: Array
  },
   computed: {
      empty(){
        return (this.$root.$data.ingredients.length == 0);
      }
  },
  methods: {
    removeItem(ingredient) {
      let id = ingredient.ingredient;
      this.$root.$data.ingredients = this.$root.$data.ingredients.filter( item => item.ingredient != id);
    }
  }
}
</script>

<style scoped>
.wrapper {
  margin-top: 50px;
  display: flex;
  align-content: center;
}
#warning{
  width: 100%;
  text-align: center;
}
table{
 margin-left: auto;
 margin-right: auto;
 

}
th{
  border-bottom: solid;
  font-size: 30px;
}
tr{
  font-size: 20px;
}

thead th:nth-child(0) {
  width: 60%;
  
}

thead th:nth-child(1) {
  margin-left: 10px;
  width: 10%;
}
thead th:nth-child(2) {
  margin-left: 10px;
  width: 30%;
}
thead th:nth-child(3) {
  margin-left: 10px;
  width: 10%;
}




.table button{
  background: none;
  border: none;
  color: red;
}

.auto {
  margin-left: auto;
}
</style>