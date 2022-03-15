<template>
<div>
  <div class="wrapper">
      <IngredientList :ingredients="ingredients" />
  </div>
  
</div>
</template>

<script>
import IngredientList from '../components/IngredientList.vue'
export default {
  name: 'list-view',
  components: {
    IngredientList
  },
  computed: {
  ingredients() {
    return this.$root.$data.ingredients;
  }
  },
}
</script>

<style scoped>
.wrapper {
  height: 50em;
}


</style>