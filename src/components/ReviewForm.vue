<template>
    <div class="review-container">
      <form @submit.prevent="store.submitForm" class="review-form">
        <div class="review-form-group">
          <ReviewInput v-model="store.review.name"/>
        </div>
  
        <div class="review-form-group">
          <ReviewTextarea v-model="store.review.reviewText"/>
        </div>
  
        <div class="review-form-group">
          <ReviewRating v-model="store.review.grade"/>
        </div>
  
        <div class="review-form-group">
          <ReviewInputFile v-model="store.review.photo"/>
          <PreviewPhoto/>
        </div>
        <button type="submit" class="review-submit-btn">Отправить отзыв</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { useReviewStore } from '../store/ReviewStore'
  import ReviewInput from '@/components/ReviewInput.vue';
  import ReviewTextarea from '@/components/ReviewTextarea.vue';
  import ReviewRating from '@/components/ReviewRating.vue';
  import ReviewInputFile from '@/components/ReviewInputFile.vue';
  import PreviewPhoto from '@/components/PreviewPhoto.vue'
  
  export default defineComponent({
    name: 'ReviewForm',
    components: {
      ReviewInput,
      ReviewTextarea,
      ReviewRating,
      ReviewInputFile,
      PreviewPhoto
    },
    setup() {
    
        const store = useReviewStore();
        
  
      return { store }
    }
  });
  </script>
  
  <style>
  #app {
    max-width: 980px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .review-container {
    margin: 0;
    padding: 0;
    margin-top: 20px;
  }
  
  .review-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .review-form-group {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
  
  .review-submit-btn {
    max-width: 300px;
    margin-left: auto;
    margin-right: auto;
  }
  
  .rating-options {
    display: flex;
    gap: 10px;
  }
  
  .preview-file img {
    max-width: 500px;
  }
  </style>
  