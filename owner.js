// Check authentication
function checkAuth() {
    const isLoggedIn = localStorage.getItem('ownerLoggedIn');
    if (isLoggedIn !== 'true') {
        window.location.href = 'owner-login.html';
    }
}

// Logout function
function logout() {
    if (confirm('Are you sure you want to logout?')) {
        localStorage.removeItem('ownerLoggedIn');
        localStorage.removeItem('ownerEmail');
        window.location.href = 'owner-login.html';
    }
}

// Initialize owner dashboard
function init() {
    checkAuth();
    
    // Add logout button to header
    addLogoutButton();
    
    // Request notification permission
    requestNotificationPermission();
    
    displayNotifications();
    displayOrders();
    
    // Auto-refresh every 3 seconds
    setInterval(() => {
        displayNotifications();
        displayOrders();
    }, 3000);
    
    // Real-time updates using storage events
    setupRealtimeUpdates();
    
    setupEventListeners();
}

// Add logout button
function addLogoutButton() {
    const header = document.querySelector('header');
    const logoutBtn = document.createElement('button');
    logoutBtn.className = 'logout-btn';
    logoutBtn.innerHTML = '🚪 Logout';
    logoutBtn.onclick = logout;
    header.appendChild(logoutBtn);
}

// Request notification permission
function requestNotificationPermission() {
    if ('Notification' in window && Notification.permission === 'default') {
        Notification.requestPermission();
    }
}

// Display notifications
function displayNotifications() {
    const notificationsDiv = document.getElementById('notifications');
    const notifications = JSON.parse(localStorage.getItem('ownerNotifications') || '[]');
    
    notificationsDiv.innerHTML = '';
    
    const unreadNotifications = notifications.filter(n => !n.read);
    
    if (unreadNotifications.length === 0) {
        notificationsDiv.innerHTML = '<p class="no-notifications">No new notifications</p>';
        return;
    }
    
    unreadNotifications.forEach(notification => {
        const notificationDiv = document.createElement('div');
        notificationDiv.className = 'notification unread';
        notificationDiv.innerHTML = `
            <div class="notification-info">
                <div class="notification-message">${notification.message}</div>
                <div class="notification-time">${new Date(notification.timestamp).toLocaleString()}</div>
            </div>
            <div class="notification-action">
                <button class="view-btn" onclick="markAsRead('${notification.orderId}')">View Order</button>
            </div>
        `;
        notificationsDiv.appendChild(notificationDiv);
    });
    
    // Add visual indicator for new orders
    if (unreadNotifications.length > 0) {
        showNewOrderIndicator();
    }
}

// Mark notification as read
function markAsRead(orderId) {
    let notifications = JSON.parse(localStorage.getItem('ownerNotifications') || '[]');
    notifications = notifications.map(n => {
        if (n.orderId === orderId) {
            n.read = true;
        }
        return n;
    });
    localStorage.setItem('ownerNotifications', JSON.stringify(notifications));
    displayNotifications();
    displayOrders();
}

// Display orders
function displayOrders() {
    const ordersList = document.getElementById('orders-list');
    const orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    ordersList.innerHTML = '';
    
    if (orders.length === 0) {
        ordersList.innerHTML = '<p class="no-orders">No orders yet</p>';
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
            <div class="order-actions">
                ${order.status === 'pending' ? `
                    <button class="action-btn accept-btn" onclick="updateOrderStatus('${order.id}', 'preparing')">
                        Accept & Start Preparing
                    </button>
                ` : ''}
                ${order.status === 'preparing' ? `
                    <button class="action-btn update-btn" onclick="updateOrderStatus('${order.id}', 'ready')">
                        Mark as Ready
                    </button>
                ` : ''}
                ${order.status === 'ready' ? `
                    <button class="action-btn complete-btn" onclick="updateOrderStatus('${order.id}', 'completed')">
                        Complete Order
                    </button>
                ` : ''}
            </div>
        `;
        
        ordersList.appendChild(orderCard);
    });
}

// Update order status
function updateOrderStatus(orderId, newStatus) {
    let orders = JSON.parse(localStorage.getItem('orders') || '[]');
    
    orders = orders.map(order => {
        if (order.id === orderId) {
            order.status = newStatus;
            
            // Send notification to customer (stored in localStorage)
            const customerNotifications = JSON.parse(localStorage.getItem('customerNotifications') || '[]');
            let statusMessage = '';
            
            switch(newStatus) {
                case 'preparing':
                    statusMessage = 'Your order has been accepted and is being prepared! 👨‍🍳';
                    break;
                case 'ready':
                    statusMessage = 'Your order is ready! Please collect it. ✅';
                    break;
                case 'completed':
                    statusMessage = 'Thank you for your order! 🎉 Enjoy your meal!';
                    break;
            }
            
            customerNotifications.push({
                orderId: orderId,
                message: statusMessage,
                timestamp: new Date().toISOString(),
                read: false
            });
            localStorage.setItem('customerNotifications', JSON.stringify(customerNotifications));
        }
        return order;
    });
    
    localStorage.setItem('orders', JSON.stringify(orders));
    
    alert(`Order status updated to: ${newStatus.charAt(0).toUpperCase() + newStatus.slice(1)}`);
    displayOrders();
}

// Setup real-time updates using storage events
function setupRealtimeUpdates() {
    // Listen for storage changes (when orders are added/updated)
    window.addEventListener('storage', function(e) {
        if (e.key === 'orders' || e.key === 'ownerNotifications') {
            // Immediately refresh the display when orders change
            displayNotifications();
            displayOrders();
        }
    });
    
    // Also listen for custom events for same-tab updates
    window.addEventListener('orderUpdated', function() {
        displayNotifications();
        displayOrders();
    });
}

// Show visual indicator for new orders
function showNewOrderIndicator() {
    // Create a temporary flash effect
    const header = document.querySelector('header');
    header.style.animation = 'newOrderFlash 0.5s ease-in-out';
    
    // Remove animation after it completes
    setTimeout(() => {
        header.style.animation = '';
    }, 500);
    
    // Show browser notification if permission is granted
    if (Notification.permission === 'granted') {
        new Notification('New Order Received!', {
            body: 'A new order has been placed. Check your dashboard.',
            icon: '🍽️'
        });
    }
}

// Setup event listeners
function setupEventListeners() {
    // Filter tabs
    document.querySelectorAll('.filter-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.filter-tab').forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            const status = this.dataset.status;
            filterOrders(status);
        });
    });
}

// Filter orders by status
function filterOrders(status) {
    const orderCards = document.querySelectorAll('.order-card');
    
    orderCards.forEach(card => {
        if (status === 'all') {
            card.style.display = 'block';
        } else {
            const orderStatus = card.querySelector('.order-status').textContent.toLowerCase();
            card.style.display = orderStatus === status ? 'block' : 'none';
        }
    });
}

// Initialize dashboard
init();

