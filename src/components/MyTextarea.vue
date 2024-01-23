<template>
        <label for="review-text" class="review-label">Ваш отзыв:</label>
        <textarea 
          id="review-text" 
          class="review-textarea" 
          required placeholder="Расскажите нам впечатления от товара"
          v-model.lazy="reviewText"
          @change="handleText"
        >
        </textarea>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'MyTextarea',
    components: {},
    setup(props, { emit }) {
        
        const reviewText = ref<string>('')

        const handleText = () => {
            emit('update:modelValue', reviewText.value);
        }
        
        return { reviewText, handleText }
    }
})
</script>
<style></style>