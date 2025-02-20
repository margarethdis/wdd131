// Array of products
const products = [
    { id: 1, name: "Bose Noise Cancelling Headphones 700" },
    { id: 2, name: "Laptop HP Envy 15" },
    { id: 3, name: "Dyson V11 Vacuum Cleaner" },
    { id: 4, name: "Canon EOS Rebel T7 DSLR Camera" },
    { id: 5, name: "Smartphone X1000" }
];

// Populate the product select options dynamically
const productSelect = document.getElementById('product');
products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id; // Use product id as the value
    option.textContent = product.name; // Use product name as the display text
    productSelect.appendChild(option); // Add option to select
});

// Get the form and submit event
document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const product = document.getElementById('product').value;
    const rating = document.querySelector('input[name="rating"]:checked') ? document.querySelector('input[name="rating"]:checked').value : '';
    const installationDate = document.getElementById('installationDate').value;
    const features = Array.from(document.querySelectorAll('input[name="features"]:checked')).map(input => input.value);
    const reviewText = document.getElementById('reviewText').value;
    const username = document.getElementById('username').value;

    // Form validation
    if (!product || !rating || !installationDate || !reviewText || !username) {
        alert('Please fill out all required fields.');
        return;
    }

    // Create an object with the form data
    const formData = {
        product,
        rating,
        installationDate,
        features,
        reviewText,
        username
    };

    // Save the form data to localStorage
    localStorage.setItem('formData', JSON.stringify(formData));

    // Get review count from localStorage or initialize it to 0
    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }

    // Increment review count
    reviewCount++;

    // Save the updated review count to localStorage
    localStorage.setItem('reviewCount', reviewCount);

    // Display the updated review count (for example, show in an element with id "reviewCount")
    document.getElementById('reviewCount').textContent = `Number of reviews submitted: ${reviewCount}`;

    // Show success message
    alert('Review submitted successfully!');

    // Reset the form
    document.getElementById('reviewForm').reset();
});


