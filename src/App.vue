<template>
  <Navbar 
    :currentUser="currentUser"
    :showAdminBoard="showAdminBoard"
    :showModeratorBoard="showModeratorBoard"
    :logOut="logOut"
  />
  <div class="container">
    <router-view :key="$route.fullPath" />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import { ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
  name: 'App',
  components: {
    Navbar
  },
  setup() {
    const store = useStore()
    const router = useRouter()
    const currentUser = ref('')

    onMounted(() => {
      currentUser.value = store.state.auth.user
    })

    const showAdminBoard = () => {
      if (currentUser.value && currentUser.value['roles']) {
        return currentUser.value['roles'].includes('ROLE_ADMIN')
      }

      return false
    }

    const showModeratorBoard = () => {
      if (currentUser.value && currentUser.value['roles']) {
        return currentUser.value['roles'].includes('ROLE_MODERATOR');
      }

      return false;
    }

    const logOut = () => {
      store.dispatch('auth/logout')
      router.go({name: 'Login'})
    }

    return {currentUser, showAdminBoard, showModeratorBoard, logOut}
  }
}
</script>

<style>

</style>
