<template>
  <div> 
      <h1>Welcome to the Forum</h1>
      <ForumList :forums="forums" /> 
  </div>
</template>

<script>
import sourceData from '@/data'
import ForumList from '@/components/ForumList'

export default {

  name: 'PageHome',

  components: {
    ForumList
  },

  data () {
    return {
      forums: Object.values(sourceData.forums)
    }
  }

}
</script>