<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark">
    <a href="/" class="navbar-brand">Supp</a>
    <div class="navbar-nav mr-auto">
      <li class="nav-item">
        <router-link :to="{name: 'Home'}" class="nav-link">
          <font-awesome-icon icon='home'/> Home
        </router-link>
      </li>
      <li v-if="showAdminBoard()" class="nav-item">
        <router-link :to="{name: 'BoardAdmin'}" class="nav-link">Admin Board</router-link>
      </li>
      <li v-if="showModeratorBoard()" class="nav-item">
        <router-link :to="{name: 'BoardModerator'}" class="nav-link">Moderator Board</router-link>
      </li>
      <li class="nav-item">
        <router-link v-if="currentUser" :to="{name: 'BoardUser'}" class="nav-link">User</router-link>
      </li>
    </div>

    <div v-if="!currentUser" class="navbar-nav ml-auto">
      <li class="nav-item">
        <router-link :to="{name: 'Register'}" class="nav-link">
          <font-awesome-icon icon='user-plus'/> Sign Up
        </router-link>
      </li>
      <li class="nav-item">
        <router-link :to="{name: 'Login'}" class="nav-link">
          <font-awesome-icon icon="sign-in-alt"/> Login
        </router-link>
      </li>
    </div>
    <div v-else class="navbar-nav ml-auto">
    <li class="nav-item">
      <router-link :to="{name: 'Profile'}" class="nav-link">
        <font-awesome-icon icon="user" />
        {{ currentUser.username }}
      </router-link>
    </li>
    <li class="nav-item">
      <a class="btn nav-link" @click.prevent="logOut">
        <font-awesome-icon icon="sign-out-alt" /> LogOut
      </a>
    </li>
    </div>
  </nav>
</template>

<script>

export default {
  name: 'Navbar',
  props: ['currentUser', 'showAdminBoard', 'showModeratorBoard', 'logOut']
}
</script>

<style scoped>

</style>