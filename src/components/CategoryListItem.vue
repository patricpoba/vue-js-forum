<template>
  <div class="forum-list">

    <h2 class="list-title"> 
        <router-link :to="{name: 'Category', params: {id: category['.key']}}">{{ category.name }}.</router-link>
    </h2>

    <ForumListItem
      v-for="forum in categoryForums"
      :forum="forum"
      :key="forum['.key']"/>
  
  </div>
</template>

<script>
  import ForumListItem from '@/components/ForumListItem'

  export default {
    props: {
      category: {
        required: true,
        type: Object
      }
    },

    components: {
      ForumListItem
    },

    computed: {
      categoryForums () {
        return Object.values(this.$store.state.forums)
          .filter(forum => forum.categoryId === this.category['.key'])
      }
    },

    data () {
      return {}
    },

    methods: {},

    filters: {}
  }
</script>

<style scoped>
</style>