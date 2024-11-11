document.addEventListener('DOMContentLoaded', () => {
    // Search Bar Animation
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', () => {
        searchBar.classList.toggle('active');
        if (searchBar.classList.contains('active')) {
            searchBar.focus();
        }
    });

    // Dropdown Menu Animation
    const dropdownBtn = document.getElementById('dropdown-btn');
    const dropdownContent = document.getElementById('dropdown-content');

    dropdownBtn.addEventListener('click', () => {
        dropdownContent.style.display = dropdownContent.style.display === 'none' ? 'block' : 'none';
    });

    // Account Dropdown
    const accountBtn = document.getElementById('account-btn');
    const accountDropdown = document.getElementById('account-dropdown');

    accountBtn.addEventListener('click', () => {
        accountDropdown.style.display = accountDropdown.style.display === 'none' ? 'block' : 'none';
    });

    // Cart Modal
    const cartBtn = document.getElementById('cart-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeBtn = document.getElementsByClassName('close')[0];

    cartBtn.onclick = () => {
        cartModal.style.display = 'block';
    }

    closeBtn.onclick = () => {
        cartModal.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target == cartModal) {
            cartModal.style.display = 'none';
        }
    }

    // Product Grid Population
    const productGrid = document.getElementById('product-grid');
    const products = [
        { name: 'Smartphone X', price: 29999, image: 'smartphone.jpg', category: 'Electronics' },
        { name: 'Wireless Earbuds', price: 3999, image: 'earbuds.jpg', category: 'Electronics' },
        { name: 'Best-selling Novel', price: 499, image: 'book.jpg', category: 'Books' },
        { name: 'Stylish T-shirt', price: 799, image: 'tshirt.jpg', category: 'Clothing' },
        { name: 'Smart Watch', price: 8999, image: 'smartwatch.jpg', category: 'Electronics' },
        { name: 'Coffee Maker', price: 2499, image: 'coffeemaker.jpg', category: 'Home & Kitchen' },
        { name: 'Face Serum', price: 1299, image: 'serum.jpg', category: 'Beauty' },
        { name: 'Board Game', price: 1499, image: 'boardgame.jpg', category: 'Toys & Games' },
        { name: 'Yoga Mat', price: 999, image: 'yogamat.jpg', category: 'Sports & Outdoors' },
        { name: 'Car Air Freshener', price: 299, image: 'airfreshener.jpg', category: 'Automotive' },
        { name: 'Laptop Stand', price: 1799, image: 'laptopstand.jpg', category: 'Electronics' },
        { name: 'Cookbook', price: 699, image: 'cookbook.jpg', category: 'Books' },
        { name: 'Running Shoes', price: 3499, image: 'shoes.jpg', category: 'Sports & Outdoors' },
        { name: 'Blender', price: 1999, image: 'blender.jpg', category: 'Home & Kitchen' },
        { name: 'Sunscreen', price: 599, image: 'sunscreen.jpg', category: 'Beauty' }
    ];

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>₹${product.price.toFixed(2)}</p>
            <button class="magic-btn add-to-cart" data-name="${product.name}" data-price="${product.price}">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });

    // Cart Functionality
    let cart = [];
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const name = e.target.getAttribute('data-name');
            const price = parseFloat(e.target.getAttribute('data-price'));
            addToCart(name, price);
        }
    });

    function addToCart(name, price) {
        cart.push({ name, price });
        updateCart();
    }

    function updateCart() {
        cartCount.textContent = cart.length;
        cartItems.innerHTML = '';
        let total = 0;
        cart.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.textContent = `${item.name} - ₹${item.price.toFixed(2)}`;
            cartItems.appendChild(itemElement);
            total += item.price;
        });
        totalAmount.textContent = total.toFixed(2);
    }
});