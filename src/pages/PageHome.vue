<template>
  <div> 
      <h1>Welcome to the Forum</h1>
      <!-- <ForumList :forums="forums" />  -->
      <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import CategoryList from '@/components/CategoryList'

export default {

  name: 'PageHome',

  components: {
    CategoryList
  },

  computed: {
    categories () {
      return Object.values(this.$store.state.categories)
    }
  }

}
</script>