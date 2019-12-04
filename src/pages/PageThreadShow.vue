<template>
  <div>
    <div class="col-large push-top"> 
      <h1>{{ thread.title }}</h1>

       <PostList :posts="posts"/>

       <form @submit.prevent="addPost">
         <div class="form-group">
           <textarea v-model="newPostText" cols="30" rows="10" class="form-input"></textarea>
         </div>
         <div class="form-actions">
           <button class="btn-blue">Submit post</button>
         </div>
       </form>
    </div>
  </div>
</template>


<script>
import sourceData from '@/data'
import PostList from '@/components/PostList'

export default {
  name: 'PageThreadShow',

  components: {
    PostList
  },

  props: {
    id: {
      required: true,
      type: String,
      default: 'iD'
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
    addPost () {
      const postId = 'greatPost' + Math.random()
      const post = {
        text: this.newPostText,
        publishedAt: Math.floor(Date.now() / 1000),
        threadId: this.id,
        userId: 'FsCDAk9w8NeXEceLV87arpsXjnQ2',
        '.key': postId
      }

      // use the method below to set value to make it react to the changes
      // this.$set(object, propertyName, value)
      this.$set(sourceData.posts, postId, post)
      this.$set(this.thread.posts, postId, postId)
      // increase user post count
      this.$set(sourceData.users[post.userId].posts, postId, postId)

      this.newPostText = ''
    }
  }
}
</script>