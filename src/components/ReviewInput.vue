<template>
    <label for="name" class="review-label">Ваше имя:</label>
    <input 
      type="text" 
      id="name" 
      class="review-input" 
      required placeholder="Введите ваше имя" 
      v-model="reviewName"
      @change="handleInput"
    >
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ReviewInput',
    components: {},
    setup(props, { emit }) {
        
        const reviewName = ref<string>('')

        const handleInput = () => {
            emit('update:modelValue', reviewName.value)
        }
        
        return { reviewName, handleInput }
    }
})
</script>
<style></style>