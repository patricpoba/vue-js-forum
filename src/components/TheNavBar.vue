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
          
          <router-link :to="{name: 'Profile'}">
            <img class="avatar-small" :src="user.avatar"  alt="">
            <span>
              {{ user.name }}
              <img class="icon-profile" src="../assets/img/svg/arrow-profile.svg" alt="">
            </span>
          </router-link>

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
  import {mapGetters} from 'vuex'

  export default {

    computed: {
      ...mapGetters({
        'user': 'authUser'
      })
    }
  }
</script>

<style scoped>
</style>