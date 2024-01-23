<template>
    <label for="file" class="review-label">Приложите ваше фото:</label>
    <input type="file" accept="image/*" @change="handleChange" id="file" name="file" class="review-file-input">
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'ReviewInputFile',
    components: {},
    setup(props, { emit }) {

        const selectedFile = ref<File | null>();

        const handleChange = (event: Event): void => {
            const file = (event.target as HTMLInputElement).files?.[0];
            selectedFile.value = file;
            emit('update:modelValue', file);
        };

        return { handleChange }
    }
})
</script>
<style></style>