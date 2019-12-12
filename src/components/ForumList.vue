<template>
  <div class="forum-list">

    <h2 class="list-title">
        <a href="category.html">Forums</a>
    </h2>

    <ForumListItem
      v-for="forum in forums"
      :forum="forum"
      :key="forum['.key']"/>
  
  </div>
</template>

<script>
import ForumListItem from '@/components/ForumListItem'

export default {

  props: {
  },

  components: {
    ForumListItem
  },

  computed: {
  },

  data () {
    return {
      forums: Object.values(this.$store.state.forums)
    }
  },

  methods: {
  },

  filters: {
  }
}
</script>

<style scoped>

</style>