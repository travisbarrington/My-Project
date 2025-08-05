// Shopping cart data
let cart = [];
let cartCount = 0;

// Product data
const products = {
    1: { name: "Classic White T-Shirt", price: 24.99 },
    2: { name: "Black Essential T-Shirt", price: 24.99 },
    3: { name: "Navy Blue T-Shirt", price: 24.99 }
};

// Add to cart function
function addToCart(productId) {
    // Check if product exists
    if (products[productId]) {
        cart.push(products[productId]);
        updateCartCount();
        showNotification(`Added ${products[productId].name} to cart!`);
    }
}

// Update cart count in the UI
function updateCartCount() {
    cartCount = cart.length;
    document.getElementById('cart-count').textContent = cartCount;
}

// Show notification when product is added
function showNotification(message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    
    // Style the notification
    notification.style.position = 'fixed';
    notification.style.bottom = '20px';
    notification.style.right = '20px';
    notification.style.backgroundColor = '#2c3e50';
    notification.style.color = 'white';
    notification.style.padding = '1rem';
    notification.style.borderRadius = '4px';
    notification.style.zIndex = '1000';
    
    // Add to document
    document.body.appendChild(notification);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Initialize cart count on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
});

// Add click event to cart icon
document.querySelector('.cart-icon').addEventListener('click', () => {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    
    // Calculate total
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    // Show cart summary
    alert(`Cart Summary:\n\n${cart.map(item => `${item.name} - $${item.price}`).join('\n')}\n\nTotal: $${total.toFixed(2)}`);
});
