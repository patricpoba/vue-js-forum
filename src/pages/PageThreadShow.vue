<template>
  <div>
    <div class="col-large push-top"> 
      <h1>{{ thread.title }}</h1>

      <PostList :posts="posts"/>

      <PostEditor 
        :threadId="id"
        @save-post="addPost"
      />
    </div>
  </div>
</template>


<script>
import sourceData from '@/data'
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
      return Object.values(sourceData.posts)
        .filter(post => postIds.includes(post['.key']))
    }
  },

  data () {
    return {
      thread: sourceData.threads[this.id],
      newPostText: ''
    }
  },

  methods: {
    addPost (eventData) {
      // console.log(eventData)

      const post = eventData.post
      const postId = eventData.post['.key']
      // use "this.$set(object, propertyName, value)" to set value to make it react to the changes
      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      // increase user post count
      this.$set(sourceData.users[post.userId].posts, postId, postId)
    }
  }
}
</script>