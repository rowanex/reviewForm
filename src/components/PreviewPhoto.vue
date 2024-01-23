<template>
    <div v-if="!(store.previewFilePath === '#')" class="preview-file">
        <p>Ваше фото:</p>
        <img :src="store.previewFilePath" alt="Фото">
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useReviewStore } from '../store/ReviewStore'
export default defineComponent({
    name: 'PreviewPhoto',
    components: {},
    setup() {

        const store = useReviewStore()

        return {store}
    }
})
</script>
<style></style>