<template>
  <div>
    
    <CategoryListItem 
      v-for="category in categories"
      :category="category"
      :key="category['.key']"
    />

  </div>
</template>

<script>
import CategoryListItem from './CategoryListItem'

export default {

  props: {
    categories: {
      requied: true,
      type: Array
    }
  },

  components: {
    CategoryListItem
  },

  computed: {},

  data () {
    return {}
  },

  methods: {},

  filters: {}
}
</script>

<style scoped>
</style>