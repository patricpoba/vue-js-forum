<template> 
  <div class="forum-listing">

    <div class="forum-details"> 
      <router-link :to="{name: 'Forum', params: {id: forum['.key']}}" :class="'text-xlarge'">{{ forum.name }}</router-link>
      <p>{{ forum.description }}</p>
    </div>

    <div class="threads-count">
      <p>
        <span class="count">{{ threadsCount }}</span> 
        {{ threadsCount > 1 ? 'threads': 'thread' }}
      </p>
    </div>

    <div class="last-thread">
      <img class="avatar" src="https://firebasestorage.googleapis.com/v0/b/forum-2a982.appspot.com/o/images%2Favatars%2Frah?alt=media&amp;token=7ad21914-a4f4-4ad0-add6-17e6d3ae9679" alt="">
      <div class="last-thread-details">
        <a href="thread.html">Post Reactions</a>
        <p class="text-xsmall">By <a href="profile.html">Rolf Haug</a>, a months ago</p>
      </div>
    </div>
  </div> 
</template>

<script>
  import {countObjectProperties} from '@/utils'

  export default {

    props: {
      forum: {
        required: true,
        type: Object
      }
    },

    components: {},

    computed: {
      threadsCount () {
        return countObjectProperties(this.forum.threads)
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