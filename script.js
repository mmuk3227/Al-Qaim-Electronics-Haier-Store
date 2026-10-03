// Exclusively Haier Appliances Data for Al Qaim Electronics
const products = [
    {
        id: 1,
        title: "Haier 1.5 Ton Pearl Inverter AC (HSU-18HF)",
        category: "ac",
        price: 165000,
        image: "https://pakref.com/wp-content/uploads/2024/09/haier-pearl-inverter-ac-1.5-ton-price-in-pakistan.jpg"
    },
    {
        id: 2,
        title: "HAIER DIGITAL INVERTER REFRIGERATOR HRF-398 IBSA",
        category: "fridge",
        price: 118000,
        image: "https://www.hcsupermart.com/wp-content/uploads/2025/02/Untitled-1-2.jpg"
    },
    {
        id: 3,
        title: "Haier Deep Freezer HDF-385H",
        category: "fridge",
        price: 93000,
        image: "https://www.alfatah.com.pk/wp-content/uploads/2023/09/17-1.jpg"
    },
    {
        id: 4,
        title: "Haier Front Load Washing Machine 10KG | HW100-BP14929S3",
        category: "washing",
        price: 115000,
        image: "https://lahorelectronics.com/wp-content/uploads/2022/09/HW100-BP14929S3.jpeg"
    },
    {
        id: 5,
        title: "HAIER 55 INCH SMART & 4K QLED TV Model 55S80EUX",
        category: "home",
        price: 138000,
        image: "https://friendshome.pk/cdn/shop/files/Untitledproject_42_9eb98e1c-031e-4fa5-b013-1c1084fd0ba1.jpg?v=1727160884&width=600"
    },
    {
        id: 6,
        title: "Haier CDL-25DG02 Microwave Oven, 25L, 900W Grill & Solo, Fast Heating",
        category: "home",
        price: 32000,
        image: "https://aielectronics.pk/wp-content/uploads/2025/11/Haier-Microwave-oven-CDL-25-DG-02-BLACK.webp"
    },
    {
        id: 7,
        title: "Haier 1.0 Ton Marvel Inverter Series AC(HSU-12HFMAE-013WISDC(W)",
        category: "ac",
        price: 128000,
        image: "https://images.priceoye.pk/haier-1-0-ton-marvel-inverter-series-ac-hsu-12hfmae-013wisdc-w-pakistan-priceoye-63vgl-500x500.webp"
    },
    {
        id: 8,
        title: "Haier 9 KG Automatic Washing Machine 90826E",
        category: "washing",
        price: 78000,
        image: "https://pakref.com/wp-content/uploads/2023/08/haier-90826-automatic-washing-machine.jpg"
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