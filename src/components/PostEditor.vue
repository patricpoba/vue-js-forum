<template>
  
  <form @submit.prevent="save">

    <div class="form-group">
      <textarea 
        v-model="text" 
        cols="30" 
        rows="10" 
        class="form-input"
      ></textarea>
    </div>

    <div class="form-actions">
      <button class="btn-blue">Submit post</button>
    </div>
  </form>
 
</template>


<script>

export default {

  props: {
    threadId: {
      required: true
    }
  },

  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },

  data () {
    return {
      text: ''
    }
  },

  methods: {
    save () {
      // const postId = 'greatPost' + Math.random()
      const post = {
        text: this.text,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.threadId,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2'
        // ,'.key': postId
      }
      this.text = ''

      this.$emit('save-post', {post})
      this.$store.dispatch('createPost', post)
    }
  }
}
</script>