<template>
    <div class="col-full" :class="$style.centered">
        <h1 :class="$style.headingLarge">0oops! Page not found</h1>
        <p :class="$style.centered">Why dont you go to the 
            <router-link :to="{name: 'Home'}">
                home page instead?
            </router-link> 
        </p>
    </div> 
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style module>
    .headingLarge {
        font-size: 100px;
    }
    .textLarge {
        font-size: 500px;
        font-weight: lighter;
    }
    .centered {
        text-align: center;
    }
</style>