<template>
  <div class="container">
    <header class="jumbotron">
      <h3>{{ content }}</h3>
    </header>
  </div>
</template>

<script>
import UserService from "../services/user.service";
import { ref, onMounted } from 'vue'

export default {
  name: 'BoardUser',
  setup() {
    const content = ref('')

    onMounted(() => {
      UserService.getUserBoard().then(
        response => {
          content.value = response.data
        },
        error => {
          content.value = 
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        }
      )
    })

    return { content }
  }
}
</script>

<style scoped>

</style>