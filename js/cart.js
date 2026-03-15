/* ========================================
   cart.js – Salaam Cart System (localStorage)
   ======================================== */

const SalaamCart = (() => {
    const STORAGE_KEY = 'salaam_cart';

    const getCart = () => {
        try {
            return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
        } catch { return []; }
    };

    const saveCart = (cart) => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
        updateCartUI();
    };

    const addItem = (product) => {
        const cart = getCart();
        const existing = cart.find(item => item.id === product.id);
        if (existing) {
            existing.qty += 1;
        } else {
            cart.push({ ...product, qty: 1 });
        }
        saveCart(cart);
        openCart();
    };

    const removeItem = (id) => {
        let cart = getCart().filter(item => item.id !== id);
        saveCart(cart);
    };

    const updateQty = (id, delta) => {
        const cart = getCart();
        const item = cart.find(i => i.id === id);
        if (item) {
            item.qty += delta;
            if (item.qty < 1) item.qty = 1;
        }
        saveCart(cart);
    };

    const getTotal = () => {
        return getCart().reduce((sum, item) => {
            const price = parseFloat(item.price.replace('$', ''));
            return sum + price * item.qty;
        }, 0);
    };

    const getTotalItems = () => {
        return getCart().reduce((sum, item) => sum + item.qty, 0);
    };

    /* ---- UI Rendering ---- */
    const updateCartUI = () => {
        // Update badge
        const badges = document.querySelectorAll('.cart-count');
        const totalItems = getTotalItems();
        badges.forEach(b => {
            b.textContent = totalItems;
            b.style.display = totalItems > 0 ? 'flex' : 'none';
        });

        // Render cart items
        const cartItemsEl = document.querySelector('.cart-items');
        if (!cartItemsEl) return;

        const cart = getCart();
        if (cart.length === 0) {
            cartItemsEl.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
            const totalEl = document.querySelector('.cart-total-amount');
            if (totalEl) totalEl.textContent = '$0';
            return;
        }

        cartItemsEl.innerHTML = cart.map(item => `
            <div class="cart-item" data-id="${item.id}">
                <img src="${item.image}" alt="${item.title}" class="cart-item-img">
                <div class="cart-item-details">
                    <div class="cart-item-name">${item.title}</div>
                    <div class="cart-item-price">${item.price}</div>
                    <div class="cart-item-qty">
                        <button class="qty-btn" onclick="SalaamCart.updateQty(${item.id}, -1)">−</button>
                        <span>${item.qty}</span>
                        <button class="qty-btn" onclick="SalaamCart.updateQty(${item.id}, 1)">+</button>
                    </div>
                    <button class="cart-item-remove" onclick="SalaamCart.removeItem(${item.id})">Remove</button>
                </div>
            </div>
        `).join('');

        const totalEl = document.querySelector('.cart-total-amount');
        if (totalEl) totalEl.textContent = `$${getTotal().toFixed(0)}`;
    };

    /* ---- Open / Close ---- */
    const openCart = () => {
        document.querySelector('.cart-overlay')?.classList.add('open');
        document.querySelector('.cart-panel')?.classList.add('open');
    };

    const closeCart = () => {
        document.querySelector('.cart-overlay')?.classList.remove('open');
        document.querySelector('.cart-panel')?.classList.remove('open');
    };

    /* ---- Init ---- */
    const init = () => {
        updateCartUI();

        document.querySelectorAll('.cart-icon').forEach(icon => {
            icon.addEventListener('click', openCart);
        });

        document.querySelector('.cart-overlay')?.addEventListener('click', closeCart);
        document.querySelector('.cart-close')?.addEventListener('click', closeCart);

        // Checkout button redirect
        document.querySelector('.cart-footer .btn')?.addEventListener('click', () => {
            if (getCart().length > 0) {
                window.location.href = 'checkout.html';
            } else {
                alert('Your cart is empty.');
            }
        });
    };

    document.addEventListener('DOMContentLoaded', init);

    return { addItem, removeItem, updateQty, getCart, openCart, closeCart, updateCartUI };
})();
