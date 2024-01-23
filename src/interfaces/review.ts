interface Review {
    name: string,
    reviewText: string,
    grade: number | null,
    photo: File | null
}

export default Review;