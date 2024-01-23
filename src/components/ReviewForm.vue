<template>
    <div class="review-container">
      <form @submit.prevent="submitForm" class="review-form">
        <div class="review-form-group">
          <ReviewInput v-model="review.name"/>
        </div>
  
        <div class="review-form-group">
          <ReviewTextarea v-model="review.reviewText"/>
        </div>
  
        <div class="review-form-group">
          <ReviewRating v-model="review.grade"/>
        </div>
  
        <div class="review-form-group">
          <ReviewInputFile v-model="review.photo"/>
          <PreviewPhoto :filePath="previewFilePath"/>
        </div>
        <button type="submit" class="review-submit-btn">Отправить отзыв</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { computed, defineComponent, ref } from 'vue';
  import axios from 'axios';
  import Review from '@/interfaces/review'
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
  
      const review = ref<Review>({
        name: '',
        reviewText: '',
        grade: null,
        photo: null
      });
  
      const submitForm = async () => {
        try {
          const response = await axios.post('/api/random-url/', createFormData(review.value), {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          })
          console.log(response);
        } catch (error) {
          console.error(`Network error ${error}`)
        }
      }
  
      const createFormData = (data: Review): FormData => {
        const formData = new FormData;
  
        for (const key in data) {
          const value = data[key as keyof Review];
          if (value instanceof File) {
            formData.append(key, value);
          } else {
            formData.append(key, String(value));
          }
        }
        return formData;
      }
  
      const previewFilePath = computed(() => {
        if (review.value.photo) {
          return URL.createObjectURL(review.value.photo);
        }
        else {
          return '#'
        }
      })
  
      return { review, submitForm, previewFilePath }
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
  