// Initialize order status page
function init() {
    displayNotifications();
    displayMyOrders();
    
    // Auto-refresh every 2 seconds
    setInterval(() => {
        displayNotifications();
        displayMyOrders();
    }, 2000);
}

// Display customer notifications
function displayNotifications() {
    const notificationsDiv = document.getElementById('notifications');
    const notifications = JSON.parse(localStorage.getItem('customerNotifications') || '[]');
    
    notificationsDiv.innerHTML = '';
    
    if (notifications.length === 0) {
        notificationsDiv.innerHTML = '<p class="no-notifications">No updates yet</p>';
        return;
    }
    
    const recentNotifications = notifications.slice().reverse().slice(0, 5);
    
    recentNotifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'notification new';
        notificationDiv.innerHTML = `
            <div class="notification-message">${notification.message}</div>
            <div class="notification-time">${new Date(notification.timestamp).toLocaleString()}</div>
        `;
        notificationsDiv.appendChild(notificationDiv);
    });
}

// Display customer's orders
function displayMyOrders() {
    const ordersList = document.getElementById('orders-list');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    const ratings = JSON.parse(localStorage.getItem('orderRatings') || '{}');
    
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="no-orders">No orders yet. Go to menu to place your first order!</p>';
        return;
    }
    
    orders.slice().reverse().forEach(order => {
        const orderCard = document.createElement('div');
        orderCard.className = 'order-card';
        
        let itemsHtml = '';
        for (const key in order.items) {
            const item = order.items[key];
            itemsHtml += `
                <div class="order-item">
                    <span>${item.icon} ${item.name}</span>
                    <span class="item-quantity">${item.quantity}x ₹${item.price * item.quantity}</span>
                </div>
            `;
        }
        
        const rating = ratings[order.id] || 0;
        const ratingHtml = order.status === 'completed' ? `
            <div class="rating-section">
                <p class="rating-label">Rate your experience:</p>
                <div class="star-rating" data-order-id="${order.id}">
                    <span class="star" data-rating="1">${rating >= 1 ? '⭐' : '☆'}</span>
                    <span class="star" data-rating="2">${rating >= 2 ? '⭐' : '☆'}</span>
                    <span class="star" data-rating="3">${rating >= 3 ? '⭐' : '☆'}</span>
                    <span class="star" data-rating="4">${rating >= 4 ? '⭐' : '☆'}</span>
                    <span class="star" data-rating="5">${rating >= 5 ? '⭐' : '☆'}</span>
                </div>
            </div>
        ` : '';
        
        orderCard.innerHTML = `
            <div class="order-header">
                <div class="order-id">${order.id}</div>
                <div class="order-status status-${order.status}">${order.status.charAt(0).toUpperCase() + order.status.slice(1)}</div>
            </div>
            <div class="order-items">
                ${itemsHtml}
            </div>
            <div class="order-total">Total: ₹${order.total}</div>
            <div class="order-date">Ordered at: ${new Date(order.createdAt).toLocaleString()}</div>
            ${ratingHtml}
        `;
        
        ordersList.appendChild(orderCard);
    });
    
    // Add event listeners to stars
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', function() {
            const orderId = this.closest('.star-rating').dataset.orderId;
            const rating = parseInt(this.dataset.rating);
            rateOrder(orderId, rating);
        });
    });
}

// Rate an order
function rateOrder(orderId, rating) {
    let ratings = JSON.parse(localStorage.getItem('orderRatings') || '{}');
    ratings[orderId] = rating;
    localStorage.setItem('orderRatings', JSON.stringify(ratings));
    
    // Update display
    displayMyOrders();
    
    // Show thank you message
    alert(`Thank you for your ${rating}-star rating! ⭐`);
}

// Initialize
init();

// Customer-only mode check - when accessed via QR code
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    // If accessed via QR code (customer mode), restrict owner access
    if (mode === 'customer' || mode === 'qr') {
        localStorage.setItem('customerOnlyMode', 'true');
    }
});

// Check on page load if customer-only mode is active
if (localStorage.getItem('customerOnlyMode') === 'true') {
    // Prevent any navigation to owner pages
    document.addEventListener('click', function(e) {
        const link = e.target.closest('a');
        if (link && (link.href.includes('owner') || link.href.includes('Owner'))) {
            e.preventDefault();
            alert('Access to owner pages is restricted. You are in customer-only mode.');
        }
    });
}

