import Vue from 'vue'
import Vuex from 'vuex'
import sourceData from '@/data'

Vue.use(Vuex)

export default new Vuex.Store({
  state: sourceData,

  actions: {

    createPost (context, post) {
      const postId = 'greatPost' + Math.random()
      post['.key'] = postId
      // set post
      // Vue.set(this.$store.state.posts, postId, post)
      context.commit('appendPostToThread', {postId, threadId: post.threadId})

      // append post to thread
      // Vue.set(this.thread.posts, postId, postId)
      context.commit('setPost', {post, postId})

      // increase user post count
      // Vue.set(this.$store.state.users[post.userId].posts, postId, postId)
      context.commit('appendPostToUser', {userId: post.userId, postId})
    }

  },

  mutations: {
    setPost (state, {post, postId}) {
      Vue.set(state.posts, postId, post)
    },

    appendPostToThread (state, {postId, threadId}) {
      const thread = state.threads[threadId]
      Vue.set(thread.posts, postId, postId)
    },

    appendPostToUser (state, {postId, userId}) {
      const user = state.users[userId]
      Vue.set(user.posts, postId, postId)
    }
  }
})
