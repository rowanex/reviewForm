import { computed, ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';
import Review from '@/interfaces/review';

export const useReviewStore = defineStore('review', () => {
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

    return {review, submitForm, createFormData, previewFilePath}
})