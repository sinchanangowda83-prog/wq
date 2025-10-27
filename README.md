# Hotel Menu & Order Management System

A complete hotel menu and order management system with customer ordering and owner dashboard.

## Features

### Customer Side (index.html)
- **View Menu**: Browse through vegetarian and non-vegetarian items with real food images
- **Categories**:
  - Vegetarian: Juices, Rice dishes, Roti/Parota, Paneer dishes
  - Non-Veg: Biryani, Curries, Grilled items, Fish dishes
- **Order Cart**: Add items, adjust quantities, remove items
- **Real-time Images**: All food items have realistic food images
- **Order Status**: Track your orders from the menu page
- **Star Rating**: Rate your completed orders with a 5-star rating system
- **QR Code Access**: Scan QR code to access menu in customer-only mode

### Owner Dashboard (owner.html)
- **Secure Login**: Login required with email and password authentication
- **View All Orders**: See all pending, preparing, ready, and completed orders
- **Notifications**: Get notified when new orders are placed
- **Manage Orders**: Accept orders, update status to preparing, mark as ready, and complete orders
- **Filter Orders**: Filter by status (All, Pending, Preparing, Ready, Completed)
- **Real-time Updates**: Auto-refreshes every 3 seconds
- **Logout**: Secure logout functionality

### Order Status Page (order-status.html)
- **Track Orders**: View all your placed orders
- **Order Updates**: Receive real-time notifications about order status
- **Status Tracking**: See order progression from pending to completed
- **Rate Orders**: Give star ratings to completed orders (1-5 stars)

## Files Structure

```
├── index.html              # Customer menu page
├── styles.css              # Customer menu styling
├── script.js               # Customer menu functionality
├── owner.html              # Owner dashboard
├── owner.css               # Owner dashboard styling
├── owner.js                # Owner dashboard functionality
├── order-status.html        # Customer order tracking
├── order-status.css        # Order tracking styling
├── order-status.js         # Order tracking functionality
└── README.md               # This file
```

## How to Use

### For Customers

#### Accessing via QR Code
1. **Scan QR Code**: Scan the QR code at your table to open the menu
2. **Customer-Only Mode**: When accessed via QR code (with `?mode=customer` parameter), you can only view:
   - Hotel menu (index.html)
   - My Orders page (order-status.html)
3. **Owner Access Restricted**: The owner pages and login will be blocked in customer mode

#### Regular Access
1. **Browse Menu**: Open `index.html` in your browser (add `?mode=customer` for customer-only access)
2. **Add Items**: Click on any food item to add it to your cart
3. **Modify Cart**: Use +/- buttons to adjust quantities or remove items
4. **Place Order**: Click "Place Order" button
5. **View Status**: Click "📦 View My Orders" button to track order status
6. **Get Updates**: Receive real-time notifications about your order

### For Owners

1. **Login**: Open `owner-login.html` in your browser
2. **Enter Credentials**: 
   - Email: owner@hotel.com
   - Password: admin123
3. **Access Dashboard**: You'll be redirected to the owner dashboard
4. **View Notifications**: Check for new order notifications
5. **Accept Orders**: Click "Accept & Start Preparing" for pending orders
6. **Update Status**: 
   - After accepting, click "Mark as Ready" when food is ready
   - Click "Complete Order" when customer receives the order
7. **Filter Orders**: Use tabs to filter orders by status
8. **Logout**: Click logout button when done

## Menu Items

### Vegetarian Section
- **Juices**: Watermelon, Orange, Apple, Banana, Kiwi, Chiku, Pineapple, Mixed Fruit
- **Rice Dishes**: Veg Fried Rice, Jeera Rice, Lemon Rice, Curd Rice, Tomato Rice
- **Roti & Parota**: Plain Roti, Butter Roti, Garlic Roti, Plain Parota, Butter Parota, Kerala Parota
- **Paneer Dishes**: Paneer Butter Masala, Paneer Tikka, Paneer Curry, Kadai Paneer, Shahi Paneer

### Non-Vegetarian Section
- **Biryani & Rice**: Chicken Biryani, Mutton Biryani, Prawn Biryani, Egg Fried Rice, Chicken Fried Rice
- **Curries**: Chicken Curry, Mutton Curry, Chicken Masala, Butter Chicken, Kadai Chicken, Chicken Korma
- **Grilled Items**: Shawarma, Chicken Tikka, Chicken Kebab, Kaima
- **Fish Dishes**: Fish Kebab, Fish Curry, Fish Fry, Grilled Fish

## Order Status Flow

1. **Pending** (Yellow) - Order placed, waiting for owner acceptance
2. **Preparing** (Blue) - Owner accepted, food is being prepared
3. **Ready** (Green) - Food is ready for pickup
4. **Completed** (Purple) - Order delivered/collected

## Technology Used

- **HTML5**: Structure
- **CSS3**: Styling with gradients, animations, and responsive design
- **JavaScript**: Functionality and localStorage for data management
- **Unsplash API**: Real food images

## Browser Compatibility

Works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## How It Works

1. Orders are stored in browser localStorage (simulating a backend)
2. Real-time communication between customer and owner via notifications
3. Auto-refresh functionality to show latest updates
4. Customer gets notifications when owner updates order status
5. Owner gets notifications when customer places new order

## Future Enhancements

- Backend integration with database
- Real authentication system
- Payment gateway integration
- Delivery tracking
- Multiple location support
- Inventory management
- Customer reviews and ratings

## Notes

- This is a demo system using localStorage for simplicity
- In production, this would require a proper backend with database
- Images are loaded from Unsplash (may require internet connection)
- Data persists in browser localStorage
- **Owner Login Credentials** (for demo):
  - Email: owner@hotel.com
  - Password: admin123
- Owner dashboard is protected by authentication
- Customers can rate completed orders with star ratings (1-5 stars)

## QR Code Usage

### QR Codes Already Generated!

✅ **QR codes have been generated for you!**

- `qr_menu.png` - QR code for the hotel menu
- `qr_orders.png` - QR code for the orders page
- `qr-display.html` - Beautiful display page with both QR codes

### View and Print QR Codes

1. **Open `qr-display.html`** in your browser to see both QR codes
2. Click the "Print" button to print QR codes for restaurant tables
3. Place printed QR codes on each table for customers to scan

### How QR Code Works

1. **QR Codes Generated**: QR codes point to:
   - Menu page: `index.html?mode=customer`
   - Orders page: `order-status.html?mode=customer`

2. **Customer Experience**: When customers scan the QR code:
   - They can only access the menu and their orders
   - Owner pages are completely blocked
   - Cannot access owner login or dashboard
   - Seamless ordering experience

3. **For Web Deployment**: Update URLs in `generate_qr_codes.py`:
   ```python
   menu_url = "http://yourdomain.com/index.html?mode=customer"
   orders_url = "http://yourdomain.com/order-status.html?mode=customer"
   ```
   Then run: `python generate_qr_codes.py`

4. **Protection**: The `mode=customer` parameter ensures:
   - No access to owner dashboard
   - No access to owner login
   - Clean customer-only interface

## Getting Started

### For Development
Simply open `index.html` in your web browser to start using the menu system!

### For Production with QR Code
1. Deploy all files to a web server
2. Create QR codes pointing to your menu URL with `?mode=customer` parameter
3. Place QR codes on restaurant tables
4. Customers scan and order directly from their phones

