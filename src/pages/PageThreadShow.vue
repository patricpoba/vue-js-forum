<template>
  <div>
    <div class="col-large push-top"> 
      <h1>{{ thread.title }}</h1>

      <PostList :posts="posts"/>

      <PostEditor 
        :threadId="id"
      />
    </div>
  </div>
</template>


<script>
import PostList from '@/components/PostList'
import PostEditor from '@/components/PostEditor'

export default {
  name: 'PageThreadShow',

  components: {
    PostList,
    PostEditor
  },

  props: {
    id: {
      required: true,
      type: String
    }
  },

  computed: {
    posts () {
      const postIds = Object.values(this.thread.posts)
      return Object.values(this.$store.state.posts)
        .filter(post => postIds.includes(post['.key']))
    },

    thread () {
      return this.$store.state.threads[this.id]
    }
  },

  data () {
    return {
    }
  },

  methods: {
  }
}
</script>