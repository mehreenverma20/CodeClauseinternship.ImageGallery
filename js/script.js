function filterSelection(category) {
    const images = document.querySelectorAll('.gallery .filter');

    images.forEach(image => {
        if (category === 'All' || image.classList.contains(category.toLowerCase())) {
            image.style.display = 'block';
        } else {
            image.style.display = 'none';
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    
    filterSelection('All');
});
