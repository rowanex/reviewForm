<template>
  <ReviewForm />
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import ReviewForm from './components/ReviewForm.vue';
export default defineComponent({
  name: 'App',
  components: {
    ReviewForm
  }
})
</script>
<style></style>