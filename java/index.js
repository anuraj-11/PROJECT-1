const ratingContainer = document.getElementById('rating');

ratingContainer.addEventListener('change', (event) => {
    const selectedRating = event.target.value;
    console.log(`User selected rating: ${selectedRating}`);
});