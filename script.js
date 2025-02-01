// Function to toggle more info in "O Volkswagen-u" sekciji
function toggleMoreInfo() {
    const moreInfo = document.getElementById('more-info');
    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
    } else {
        moreInfo.style.display = "none";
    }
}

// Function to filter models based on selected category
document.getElementById('model-filter').addEventListener('change', function() {
    const filterValue = this.value;
    const models = document.querySelectorAll('.model');
    
    models.forEach(function(model) {
        if (filterValue === 'all' || model.getAttribute('data-category') === filterValue) {
            model.style.display = 'block';
        } else {
            model.style.display = 'none';
        }
    });
});
