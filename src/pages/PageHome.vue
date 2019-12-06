<template>
  <div> 
      <h1>Welcome to the Forum</h1>
      <!-- <ForumList :forums="forums" />  -->
      <CategoryList :categories="categories"/>
  </div>
</template>

<script>
import sourceData from '@/data'
import CategoryList from '@/components/CategoryList'

export default {

  name: 'PageHome',

  components: {
    CategoryList
  },

  data () {
    return {
      categories: Object.values(sourceData.categories)
    }
  }

}
</script>