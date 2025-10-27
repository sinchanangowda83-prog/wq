// Menu Items Data with realistic food images
const menuItems = {
    veg: [
        // Juices
        { name: 'Watermelon Juice', price: 60, icon: '🍉', image: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=600&h=600&fit=crop&q=80' },
        { name: 'Orange Juice', price: 55, icon: '🍊', image: 'https://images.unsplash.com/photo-1606919592566-e2c4b9d7e1ef?w=600&h=600&fit=crop&q=80' },
        { name: 'Apple Juice', price: 65, icon: '🍎', image: 'https://images.unsplash.com/photo-1580836818898-0114b735b57e?w=600&h=600&fit=crop&q=80' },
        { name: 'Banana Juice', price: 50, icon: '🍌', image: 'https://images.unsplash.com/photo-1608312911894-ad4e52f7c533?w=600&h=600&fit=crop&q=80' },
        { name: 'Kiwi Juice', price: 70, icon: '🥝', image: 'https://images.unsplash.com/photo-1581629995481-cb34b3b03ebb?w=600&h=600&fit=crop&q=80' },
        { name: 'Chiku Juice', price: 60, icon: '🥑', image: 'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?w=600&h=600&fit=crop&q=80' },
        { name: 'Pineapple Juice', price: 65, icon: '🍍', image: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=600&h=600&fit=crop&q=80' },
        { name: 'Mixed Fruit Juice', price: 80, icon: '🍹', image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&h=600&fit=crop&q=80' },
        // Rice Dishes
        { name: 'Veg Fried Rice', price: 120, icon: '🍚', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop&q=80' },
        { name: 'Jeera Rice', price: 90, icon: '🍚', image: 'https://images.unsplash.com/photo-1587115254570-0c0066ef10e1?w=600&h=600&fit=crop&q=80' },
        { name: 'Lemon Rice', price: 100, icon: '🍋', image: 'https://images.unsplash.com/photo-1541216970279-affbfdd55be8?w=600&h=600&fit=crop&q=80' },
        { name: 'Curd Rice', price: 85, icon: '🍚', image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=600&h=600&fit=crop&q=80' },
        { name: 'Tomato Rice', price: 95, icon: '🍅', image: 'https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=600&h=600&fit=crop&q=80' },
        // Roti & Parota
        { name: 'Plain Roti', price: 15, icon: '🫓', image: 'https://images.unsplash.com/photo-1603123863665-c09c48884a64?w=600&h=600&fit=crop&q=80' },
        { name: 'Butter Roti', price: 20, icon: '🫓', image: 'https://images.unsplash.com/photo-1582083842868-c839720ae72b?w=600&h=600&fit=crop&q=80' },
        { name: 'Garlic Roti', price: 25, icon: '🫓', image: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&h=600&fit=crop&q=80' },
        { name: 'Plain Parota', price: 25, icon: '🥟', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop&q=80' },
        { name: 'Butter Parota', price: 30, icon: '🥟', image: 'https://images.unsplash.com/photo-1608367847622-62fd2f3e8b2c?w=600&h=600&fit=crop&q=80' },
        { name: 'Kerala Parota', price: 35, icon: '🥟', image: 'https://images.unsplash.com/photo-1615092296061-e2ccfeb2f3d6?w=600&h=600&fit=crop&q=80' },
        // Paneer Dishes
        { name: 'Paneer Butter Masala', price: 180, icon: '🧀', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&h=600&fit=crop&q=80' },
        { name: 'Paneer Tikka', price: 170, icon: '🧀', image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&h=600&fit=crop&q=80' },
        { name: 'Paneer Curry', price: 150, icon: '🧀', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=600&fit=crop&q=80' },
        { name: 'Kadai Paneer', price: 180, icon: '🧀', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop&q=80' },
        { name: 'Shahi Paneer', price: 190, icon: '🧀', image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&h=600&fit=crop&q=80' }
    ],
    nonVeg: [
        // Biryani & Rice
        { name: 'Chicken Biryani', price: 180, icon: '🍛', image: 'https://images.unsplash.com/photo-1660898227000-f7d61bb92b90?w=600&h=600&fit=crop&q=80' },
        { name: 'Mutton Biryani', price: 220, icon: '🍛', image: 'https://images.unsplash.com/photo-1642815228147-44f1e0ba91a8?w=600&h=600&fit=crop&q=80' },
        { name: 'Prawn Biryani', price: 240, icon: '🍛', image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=600&h=600&fit=crop&q=80' },
        { name: 'Egg Fried Rice', price: 130, icon: '🍚', image: 'https://images.unsplash.com/photo-1608312911894-ad4e52f7c533?w=600&h=600&fit=crop&q=80' },
        { name: 'Chicken Fried Rice', price: 150, icon: '🍚', image: 'https://images.unsplash.com/photo-1597334948336-2a5c05c631fc?w=600&h=600&fit=crop&q=80' },
        // Curries
        { name: 'Chicken Curry', price: 160, icon: '🍗', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=600&fit=crop&q=80' },
        { name: 'Mutton Curry', price: 200, icon: '🍖', image: 'https://images.unsplash.com/photo-1607334797303-8e1d70ccd947?w=600&h=600&fit=crop&q=80' },
        { name: 'Chicken Masala', price: 170, icon: '🍗', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&h=600&fit=crop&q=80' },
        { name: 'Butter Chicken', price: 180, icon: '🍗', image: 'https://images.unsplash.com/photo-1606755962773-d324e68c0f33?w=600&h=600&fit=crop&q=80' },
        { name: 'Kadai Chicken', price: 180, icon: '🍗', image: 'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&h=600&fit=crop&q=80' },
        { name: 'Chicken Korma', price: 190, icon: '🍗', image: 'https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&h=600&fit=crop&q=80' },
        // Grilled Items
        { name: 'Shawarma', price: 120, icon: '🌯', image: 'https://images.unsplash.com/photo-1625915499326-a8931458255f?w=600&h=600&fit=crop&q=80' },
        { name: 'Chicken Tikka', price: 200, icon: '🍗', image: 'https://images.unsplash.com/photo-1607335614552-85e1620ce48b?w=600&h=600&fit=crop&q=80' },
        { name: 'Chicken Kebab', price: 190, icon: '🍢', image: 'https://images.unsplash.com/photo-1588166524941-3bf61a9c41db?w=600&h=600&fit=crop&q=80' },
        { name: 'Kaima', price: 150, icon: '🍖', image: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?w=600&h=600&fit=crop&q=80' },
        // Fish Dishes
        { name: 'Fish Kebab', price: 180, icon: '🐟', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=600&fit=crop&q=80' },
        { name: 'Fish Curry', price: 150, icon: '🐟', image: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?w=600&h=600&fit=crop&q=80' },
        { name: 'Fish Fry', price: 180, icon: '🐟', image: 'https://images.unsplash.com/photo-1592167147047-ce392c9a2d3e?w=600&h=600&fit=crop&q=80' },
        { name: 'Grilled Fish', price: 200, icon: '🐟', image: 'https://images.unsplash.com/photo-1615840287214-7ff58936c4cf?w=600&h=600&fit=crop&q=80' }
    ]
};

// Cart object to store ordered items
let cart = {};

// Initialize the page
function init() {
    displayMenuItems();
    updateCartDisplay();
    setupFloatingCartButton();
}

// Display menu items
function displayMenuItems() {
    const vegContainer = document.getElementById('veg-items');
    const nonVegContainer = document.getElementById('non-veg-items');

    // Display veg items
    menuItems.veg.forEach(item => {
        const itemElement = createMenuItem(item, 'veg');
        vegContainer.appendChild(itemElement);
    });

    // Display non-veg items
    menuItems.nonVeg.forEach(item => {
        const itemElement = createMenuItem(item, 'non-veg');
        nonVegContainer.appendChild(itemElement);
    });
}

// Create menu item element
function createMenuItem(item, type) {
    const itemDiv = document.createElement('div');
    itemDiv.className = `menu-item ${type}`;
    itemDiv.innerHTML = `
        <div class="item-image" style="background-image: url('${item.image}')"></div>
        <div class="item-icon">${item.icon}</div>
        <div class="item-name">${item.name}</div>
        <div class="item-price">₹${item.price}</div>
    `;
    
    itemDiv.addEventListener('click', () => {
        addToCart(item, type);
    });

    return itemDiv;
}

// Add item to cart
function addToCart(item, type) {
    const cartKey = `${type}-${item.name}`;
    
    if (cart[cartKey]) {
        cart[cartKey].quantity += 1;
    } else {
        cart[cartKey] = {
            name: item.name,
            price: item.price,
            quantity: 1,
            icon: item.icon,
            type: type
        };
    }

    updateCartDisplay();
}

// Remove item from cart
function removeFromCart(cartKey) {
    if (cart[cartKey] && cart[cartKey].quantity > 1) {
        cart[cartKey].quantity -= 1;
    } else {
        delete cart[cartKey];
    }
    updateCartDisplay();
}

// Remove item completely from cart
function removeItemCompletely(cartKey) {
    delete cart[cartKey];
    updateCartDisplay();
}

// Update cart display
function updateCartDisplay() {
    const cartItemsDiv = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    const mobileCartCount = document.getElementById('mobile-cart-count');
    const totalPrice = document.getElementById('total-price');
    const orderBtn = document.getElementById('order-btn');

    // Calculate total items and price
    let itemCount = 0;
    let total = 0;

    for (const key in cart) {
        itemCount += cart[key].quantity;
        total += cart[key].price * cart[key].quantity;
    }

    cartCount.textContent = itemCount;
    mobileCartCount.textContent = itemCount;
    totalPrice.textContent = total;

    // Enable/disable order button
    orderBtn.disabled = itemCount === 0;

    // Clear previous items
    cartItemsDiv.innerHTML = '';

    if (itemCount === 0) {
        cartItemsDiv.innerHTML = '<p class="empty-cart">No items in cart</p>';
    } else {
        // Display cart items
        for (const key in cart) {
            const item = cart[key];
            const itemDiv = document.createElement('div');
            itemDiv.className = 'cart-item';
            itemDiv.innerHTML = `
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.icon} ${item.name}</div>
                    <div class="cart-item-price">₹${item.price} × ${item.quantity}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="control-btn" onclick="removeFromCart('${key}')">-</button>
                    <span class="quantity">${item.quantity}</span>
                    <button class="control-btn" onclick="addToCartFromCart('${key}')">+</button>
                    <button class="control-btn remove" onclick="removeItemCompletely('${key}')" title="Remove">🗑️</button>
                </div>
            `;
            cartItemsDiv.appendChild(itemDiv);
        }
    }
}

// Add item from cart controls
function addToCartFromCart(cartKey) {
    const item = cart[cartKey];
    if (item) {
        addToCart(item, item.type);
    }
}

// Setup floating cart button for mobile
function setupFloatingCartButton() {
    const floatingBtn = document.getElementById('floating-cart-btn');
    const cartContainer = document.getElementById('cart-container');

    floatingBtn.addEventListener('click', () => {
        cartContainer.classList.toggle('active');
    });

    // Close cart when clicking outside
    cartContainer.addEventListener('click', (e) => {
        if (e.target === cartContainer) {
            cartContainer.classList.remove('active');
        }
    });
}

// Place order
document.getElementById('order-btn').addEventListener('click', () => {
    if (Object.keys(cart).length === 0) {
        alert('Cart is empty!');
        return;
    }

    let orderSummary = 'Order Summary:\n\n';
    let total = 0;

    for (const key in cart) {
        const item = cart[key];
        total += item.price * item.quantity;
        orderSummary += `${item.icon} ${item.name} - ${item.quantity}x = ₹${item.price * item.quantity}\n`;
    }

    orderSummary += `\nTotal: ₹${total}`;

    if (confirm(orderSummary + '\n\nConfirm order?')) {
        // Create order object
        const orderId = 'ORDER-' + Date.now();
        const order = {
            id: orderId,
            items: JSON.parse(JSON.stringify(cart)),
            total: total,
            status: 'pending',
            createdAt: new Date().toISOString(),
            customerContact: 'customer@example.com'
        };

        // Store order in localStorage (simulating backend)
        let orders = JSON.parse(localStorage.getItem('orders') || '[]');
        orders.push(order);
        localStorage.setItem('orders', JSON.stringify(orders));
        
        // Store order in owner notifications
        let ownerNotifications = JSON.parse(localStorage.getItem('ownerNotifications') || '[]');
        ownerNotifications.push({
            orderId: orderId,
            message: `New order received! Total: ₹${total}`,
            timestamp: new Date().toISOString(),
            read: false
        });
        localStorage.setItem('ownerNotifications', JSON.stringify(ownerNotifications));

        // Trigger custom event for real-time updates
        window.dispatchEvent(new CustomEvent('orderUpdated'));

        alert('Order placed successfully! 🎉\nOrder ID: ' + orderId + '\n\nHotel management has been notified.\nYou will receive updates on your order status.');
        
        cart = {};
        updateCartDisplay();
    }
});

// Initialize the app
init();

// Customer-only mode check - when accessed via QR code
window.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const mode = urlParams.get('mode');
    
    // If accessed via QR code (customer mode), hide any owner access
    if (mode === 'customer' || mode === 'qr') {
        // Mark this as customer-only session
        localStorage.setItem('customerOnlyMode', 'true');
        
        // Prevent navigation to owner pages
        const originalOpen = window.open;
        window.open = function(url, target, features) {
            if (typeof url === 'string' && (url.includes('owner') || url.includes('Owner'))) {
                console.log('Owner access is restricted in customer mode');
                return null;
            }
            return originalOpen.apply(window, arguments);
        };
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
    
    // Also prevent window.open to owner pages
    const originalOpen = window.open;
    window.open = function(url, target, features) {
        if (typeof url === 'string' && (url.includes('owner') || url.includes('Owner'))) {
            return null;
        }
        return originalOpen.apply(window, arguments);
    };
}

// Clean up customer-only mode when explicitly accessing owner login
window.addEventListener('storage', function(e) {
    if (e.key === 'ownerLoggedIn' && e.newValue === 'true') {
        localStorage.removeItem('customerOnlyMode');
    }
});

