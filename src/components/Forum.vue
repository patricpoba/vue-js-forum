<template>
  <div :class="'forum-wrapper'">
    <div class="col-full push-top">

      <div class="forum-header">
        <div class="forum-details">
          <h1>{{ forum.name }}</h1>
          <p class="text-lead">{{ forum.description }}</p>
        </div>
        <a href="#" class="btn-green btn-small">Start a thread</a>
      </div>
    </div>

    <div class="col-full">
      <ThreadList :threads="threads" />
    </div>
  
  </div>
</template>

<script>
  import ThreadList from './ThreadList'

  export default {
    components: {
      ThreadList
    },

    props: {
      id: {
        required: true,
        type: String
      }
    },

    computed: {
      forum () {
        return this.$store.state.forums[this.id]
      },

      threads () {
        // return this.$store.state.threads[this.forum['.key']]
        return Object.values(this.$store.state.threads)
          .filter(thread => thread.forumId === this.id)
      }
    },

    data () {
      return {
      }
    }
  }
</script>

<style scoped>
  .forum-wrapper{
    width: 100%;
  }
</style>