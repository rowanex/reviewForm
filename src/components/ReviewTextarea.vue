<template>
    <label for="review-text" class="review-label">Ваш отзыв:</label>
    <p v-if="feedBackMessage">{{ feedBackMessage }}</p>
    <textarea id="review-text" class="review-textarea" required placeholder="Расскажите нам впечатления от товара"
        v-model="reviewText" @change="handleText">
        </textarea>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ReviewTextarea',
    components: {},
    setup(props, { emit }) {

        const reviewText = ref<string>('')

        const getWordCount = computed(() => {
            const words = reviewText.value.split(/\s+/).filter(word => word.length > 0);
            return words.length;
        })

        const feedBackMessage = computed(() => {

            const wordCount = getWordCount.value;

            if (wordCount === 0) {
                return '';
            } else if (wordCount < 5) {
                return 'Напишите побольше, пожалуйста';
            } else if (wordCount >= 5 && wordCount < 15) {
                return 'У вас неплохо получается';
            } else {
                return 'Спасибо за подробный отзыв';
            }

        })

        const handleText = () => {
            emit('update:modelValue', reviewText.value);
        }

        return { reviewText, handleText, feedBackMessage }
    }
})
</script>
<style></style>