<template>
	<div>
		<h1>{{ msg }}</h1>

		<div v-for="thread in threads">
			<p>{{ thread.title }}</p>
			
      <div v-for="postId in thread.posts">
        <p>{{ users[posts[postId].userId].name }}</p>
        <p>{{ posts[postId].text }}</p>
      </div>
		</div> 
	</div>
</template>

<script>
import sourceData from '@/data' // @ means src folder

// console.log(sourceData)

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      threads: sourceData.threads,
      posts: sourceData.posts,
      users: sourceData.users
    }
  }
}
</script>