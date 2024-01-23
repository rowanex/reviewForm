<template>
    <div v-if="!(filePath === '#')" class="preview-file">
        <p>Ваше фото:</p>
        <img :src="filePath" alt="Фото">
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
    name: 'PreviewPhoto',
    components: {},
    props: {
        filePath: {
            required: true,
            type: String
        }
    },
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