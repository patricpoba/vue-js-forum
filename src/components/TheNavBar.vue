<template>
  <header class="header" id="header">

    <!-- <a href="/" class="logo">
      <img src="../assets/img/svg/vueschool-logo.svg"> dsds
    </a> -->

    <router-link :to="{name: 'Home'}" :class="'logo'"> 
      <img src="../assets/img/svg/vueschool-logo.svg"> 
    </router-link>

    <div class="btn-hamburger">
      <!-- use .btn-humburger-active to open the menu -->
      <div class="top bar"></div>
      <div class="middle bar"></div>
      <div class="bottom bar"></div>
    </div>

    <!-- use .navbar-open to open nav -->
    <nav class="navbar">
      <ul>
        <li class="navbar-user">
          <a href="#">
            <img class="avatar-small" src="https://pbs.twimg.com/profile_images/881260299420041217/GMVGlDea_400x400.jpg" alt="">
            <span>
              Alex Kyriakidis
              <img class="icon-profile" src="/assets/img/svg/arrow-profile.svg" alt="">
            </span>
          </a>

          <!-- dropdown menu -->
          <!-- add class "active-drop" to show the dropdown -->
          <div id="user-dropdown">
            <div class="triangle-drop"></div>
            <ul class="dropdown-menu">
              <li class="dropdown-menu-item"><a href="profile.html">View profile</a></li>
              <li class="dropdown-menu-item"><a href="#">Log out</a></li>
            </ul>
          </div>
        </li>
      </ul>

      <ul>
        <li class="navbar-item"> 
          <router-link :to="{name: 'Home'}"> 
            Home
          </router-link>
        </li>
        <li class="navbar-item">
          <a href="#">Category</a>
        </li>
        <li class="navbar-item">
          <router-link :to="{name: 'ForumList'}"> 
            Forum
          </router-link>
        </li>
        <li class="navbar-item">
          <a href="#">Thread</a>
        </li>
        <!-- Show these option only on mobile-->
        <li class="navbar-item mobile-only">
          <a href="#">My Profile</a>
        </li>
        <li class="navbar-item mobile-only">
          <a href="#">Logout</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
 export default {
   name: 'ComponentName',

   props: {},

   components: {},

   computed: {},

   data () {
     return {}
   },

   methods: {},

   filters: {}
 }
</script>

<style scoped>
</style>