// Exclusively Haier Appliances Data for Al Qaim Electronics
const products = [
    {
        id: 1,
        title: "Haier 1.5 Ton Pearl Inverter AC (HSU-18HF)",
        category: "ac",
        price: 165000,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 2,
        title: "Haier Digital Inverter Refrigerator (HRF-398)",
        category: "fridge",
        price: 118000,
        image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 3,
        title: "Haier Convertible Deep Freezer (HDF-385)",
        category: "fridge",
        price: 89000,
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 4,
        title: "Haier Fully Automatic Front Load Washing Machine",
        category: "washing",
        price: 115000,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 5,
        title: "Haier 55\" 4K HQLED Smart Android TV",
        category: "home",
        price: 138000,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 6,
        title: "Haier Digital Grill Microwave Oven (25L)",
        category: "home",
        price: 32000,
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 7,
        title: "Haier 1 Ton Marvel Inverter AC (HSU-12HF)",
        category: "ac",
        price: 128000,
        image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=500&q=80"
    },
    {
        id: 8,
        title: "Haier Top Load Automatic Washing Machine (9KG)",
        category: "washing",
        price: 78000,
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?auto=format&fit=crop&w=500&q=80"
    }
];
let cart = [];

const productGrid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartSidebar = document.getElementById('cartSidebar');

// Render Product Cards
function renderProducts(items) {
    productGrid.innerHTML = '';
    
    if (items.length === 0) {
        productGrid.innerHTML = '<p style="grid-column: 1/-1; text-align:center; color:#94a3b8;">No products found.</p>';
        return;
    }

    items.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <div>
                <h3>${product.title}</h3>
                <p class="price">PKR ${product.price.toLocaleString()}</p>
            </div>
            <button class="add-cart-btn" onclick="addToCart(${product.id})">Add to Order</button>
        `;
        productGrid.appendChild(card);
    });
}

// Add to Cart
function addToCart(id) {
    const item = products.find(p => p.id === id);
    const existing = cart.find(c => c.id === id);

    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    cartSidebar.classList.add('open');
}

// Update Cart UI
function updateCartUI() {
    cartCount.innerText = cart.reduce((sum, item) => sum + item.qty, 0);
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">Your cart is empty.</p>';
        cartTotal.innerText = '0';
        return;
    }

    cartItems.innerHTML = '';
    let total = 0;

    cart.forEach(item => {
        total += item.price * item.qty;
        const div = document.createElement('div');
        div.classList.add('cart-item');
        div.innerHTML = `
            <div>
                <h4 style="font-size:0.95rem;">${item.title}</h4>
                <p style="color:#38bdf8; font-size:0.85rem;">PKR ${item.price.toLocaleString()} x ${item.qty}</p>
            </div>
            <button onclick="removeFromCart(${item.id})" style="background:none; border:none; color:#ef4444; cursor:pointer;">&times;</button>
        `;
        cartItems.appendChild(div);
    });

    cartTotal.innerText = total.toLocaleString();
}

// Remove Item
function removeFromCart(id) {
    cart = cart.filter(item => item.id !== id);
    updateCartUI();
}

// Filter Categories
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const cat = btn.dataset.category;
        if (cat === 'all') {
            renderProducts(products);
        } else {
            const filtered = products.filter(p => p.category === cat);
            renderProducts(filtered);
        }
    });
});

// Search Filter
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = products.filter(p => p.title.toLowerCase().includes(query));
    renderProducts(filtered);
});

// Sidebar Toggle
document.getElementById('openCartBtn').addEventListener('click', () => cartSidebar.classList.add('open'));
document.getElementById('closeCartBtn').addEventListener('click', () => cartSidebar.classList.remove('open'));

// Send Order via WhatsApp
document.getElementById('whatsappOrderBtn').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Please add items to cart first!");
        return;
    }

    let message = "Hello Al Qaim Electronics! I want to inquire/order the following items:\n\n";
    let total = 0;

    cart.forEach((item, index) => {
        message += `${index + 1}. ${item.title} (x${item.qty}) - PKR ${(item.price * item.qty).toLocaleString()}\n`;
        total += item.price * item.qty;
    });

    message += `\nTotal Estimated Price: PKR ${total.toLocaleString()}`;

    // Replace with exact WhatsApp number (e.g. 923001234567)
    const phone = "923001234567";
    const whatsappUrl = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappUrl, '_blank');
});

// Initial Load
renderProducts(products);