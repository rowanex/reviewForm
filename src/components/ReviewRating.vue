<template>
    <fieldset class="review-rating">
        <legend>Поставьте оценку от 1 до 5:</legend>
        <div class="rating-options">
            <input v-model.number="reviewGrade" type="radio" name="radio-grade" id="radio-grade-1" value="1" required>
            <label for="radio-grade-1">1</label>

            <input v-model.number="reviewGrade" type="radio" name="radio-grade" id="radio-grade-2" value="2">
            <label for="radio-grade-2">2</label>

            <input v-model.number="reviewGrade" type="radio" name="radio-grade" id="radio-grade-3" value="3">
            <label for="radio-grade-3">3</label>

            <input v-model.number="reviewGrade" type="radio" name="radio-grade" id="radio-grade-4" value="4">
            <label for="radio-grade-4">4</label>

            <input v-model.number="reviewGrade" type="radio" name="radio-grade" id="radio-grade-5" value="5">
            <label for="radio-grade-5">5</label>
        </div>
    </fieldset>
</template>
<script lang="ts">
import { defineComponent, ref, watch } from 'vue';
export default defineComponent({
    name: 'ReviewRating',
    components: {},
    setup(props, { emit }) {

        const reviewGrade = ref<number>()

        watch(reviewGrade, (newGrade) => {
            emit('update:modelValue', newGrade)
        })

        return { reviewGrade }
    }
})
</script>
<style></style>