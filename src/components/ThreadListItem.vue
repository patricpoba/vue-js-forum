<template>
     
  <div class="thread">
      <div>
          <p>
              <router-link :to="{name: 'PageThreadShow', params: {id: thread['.key']} }">
                {{ thread.title }}
              </router-link>
          </p> 
          <p class="text-faded text-xsmall">
              By <a href="#">{{ user.name }}</a>, <AppDate :timestamp="thread.publishedAt" />
          </p>
      </div>

      <div class="activity">
          <p class="replies-count">
              {{ repliesCount }} replies
          </p>

          <img class="avatar-medium" :src="user.avatar" :title="user.name">

          <!-- <div>
              <p class="text-xsmall">
                  <a href="profile.html">Bruce Wayne</a>
              </p>
              <p class="text-xsmall text-faded">2 hours ago</p>
          </div> -->
      </div>
  </div>
 
</template>

<script>
  import {countObjectProperties} from '@/utils'

  export default {
    name: 'ThreadListItem',

    components: {
    },

    props: {
      thread: {
        required: true,
        type: Object
      }
    },

    computed: {
      repliesCount () {
        return countObjectProperties(this.thread.posts)
      },

      user () {
        return this.$store.state.users[this.thread.userId]
      }
    }
  }
</script>
