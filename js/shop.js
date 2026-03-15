/* ========================================
   shop.js – Salaam Product Catalog & Modal
   ======================================== */

const products = [
    {
        id: 1, title: "Midnight Oud", category: "oud", price: "$280", rating: 5, reviews: 312, best: true,
        desc: "Our most iconic creation. Midnight Oud is a deep, spiritual journey through ancient forests. Wild Cambodian oud — smoky, resinous, and slightly sweet — is framed by saffron and cardamom before settling into a sensual base of dark musk, warm amber, and creamy Mysore sandalwood. Unmistakable and utterly unforgettable.",
        top: "Saffron, Cardamom", heart: "Agarwood (Oud), Rose Absolute", base: "Dark Musk, Amber, Sandalwood",
        volume: "100ml", concentration: "Extrait de Parfum",
        images: [
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403407-9646af846f35?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 2, title: "Rose Imperial", category: "floral", price: "$240", rating: 4, reviews: 187, best: true,
        desc: "An opulent floral masterpiece worthy of royalty. Bulgarian rose drenched in morning dew meets powdery iris and a bright spark of pink pepper. As it dries, Rose Imperial reveals a sophisticated base of white musk and cashmere wood — soft, feminine, and regal.",
        top: "Pink Pepper, Bergamot", heart: "Bulgarian Rose, Iris", base: "White Musk, Cashmere Wood",
        volume: "75ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615529420084-2a13ae85a3c6?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 3, title: "Sicilian Citrus", category: "citrus", price: "$190", rating: 4, reviews: 94,
        desc: "Sun-kissed Sicilian lemons, vivid grapefruit, and sparkling neroli over a bed of sea-salt accord and white cedar. Pure Mediterranean energy captured in a bottle.",
        top: "Sicilian Lemon, Grapefruit", heart: "Neroli, White Tea", base: "Sea Salt Accord, Cedar",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 4, title: "Sandalwood Reserve", category: "woody", price: "$310", rating: 5, reviews: 203, best: true,
        desc: "The ultimate sandalwood experience. We source the finest 50-year-old Mysore sandalwood — creamy, sacred, and impossibly smooth — and frame it with aromatic cardamom and resinous elemi.",
        top: "Cardamom, Elemi", heart: "Mysore Sandalwood, Orris Root", base: "Tonka Bean, Vanilla, Leather",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 5, title: "Royal Amber", category: "oud", price: "$340", rating: 5, reviews: 246, best: true,
        desc: "Liquid gold. Precious amber resin fused with rich benzoin, sweet labdanum, and a touch of oud — warm, sumptuous, and undeniably regal.",
        top: "Cinnamon, Orange Blossom", heart: "Amber, Benzoin", base: "Oud, Labdanum, Vanilla",
        volume: "100ml", concentration: "Parfum",
        images: [
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403407-9646af846f35?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 6, title: "Jasmine Noir", category: "floral", price: "$260", rating: 5, reviews: 142,
        desc: "Night-blooming jasmine captured at peak intensity, interlaced with smoky incense and dark vanilla. Mysterious and deeply seductive.",
        top: "Bergamot, Almond", heart: "Jasmine Sambac, Tuberose", base: "Smoky Incense, Vanilla, Patchouli",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615529420084-2a13ae85a3c6?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 7, title: "Bergamot Essence", category: "citrus", price: "$210", rating: 4, reviews: 115,
        desc: "A refined interpretation of Italian elegance. Calabrian bergamot lifted by green tea and enriched with white woods and creamy musk.",
        top: "Calabrian Bergamot, Mandarin", heart: "Green Tea, Lavender", base: "White Woods, Musk",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 8, title: "Cedarwood Echo", category: "woody", price: "$290", rating: 4, reviews: 98,
        desc: "Ancient Atlas cedarwood resounds through layers of smoky vetiver and dry amber. A scent of quiet strength and timeless masculinity.",
        top: "Black Pepper, Juniper", heart: "Atlas Cedarwood, Vetiver", base: "Dry Amber, Moss",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 101, title: "Velvet Amber", category: "oud", price: "$295", rating: 5, reviews: 127,
        desc: "A warm, enveloping fragrance that wraps you in layers of amber resin, smoked vanilla, and precious labdanum. Opens with a vibrant saffron spark.",
        top: "Saffron, Pink Pepper", heart: "Amber Resin, Smoked Vanilla", base: "Labdanum, Sandalwood, Benzoin",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1590736969955-71cc94901144?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 102, title: "Golden Citrus", category: "citrus", price: "$195", rating: 4, reviews: 89,
        desc: "A sun-drenched, Mediterranean jewel. Golden Citrus captures the essence of a Sicilian morning — vivid lemon zest and sparkling grapefruit.",
        top: "Sicilian Lemon, Grapefruit", heart: "White Tea, Neroli", base: "Cedarwood, Light Musk",
        volume: "75ml", concentration: "Eau de Toilette",
        images: [
            "https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 103, title: "Desert Rose", category: "floral", price: "$265", rating: 5, reviews: 204,
        desc: "Inspired by the legendary Taif rose harvest. Desert Rose pairs the intoxicating sweetness of Damask rose with threads of saffron.",
        top: "Saffron, Coriander", heart: "Taif Rose, Geranium", base: "Dry Amber, Oud, Cedar",
        volume: "100ml", concentration: "Extrait de Parfum",
        images: [
            "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615529420084-2a13ae85a3c6?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 104, title: "Noir Absolu", category: "limited", price: "$420", rating: 5, reviews: 91,
        desc: "Unapologetically dark. Noir Absolu features aged Laotian oud at its core — smoky, animalic, and intensely complex.",
        top: "Dark Plum, Black Pepper", heart: "Aged Oud, Leather Accord", base: "Incense, Castoreum, Ebony",
        volume: "50ml", concentration: "Parfum (Limited Edition)",
        images: [
            "https://images.unsplash.com/photo-1587017539504-67cfbddac569?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 105, title: "Ivory Musk", category: "signature", price: "$230", rating: 4, reviews: 156,
        desc: "Clean luxury, distilled. Ivory Musk is the effortless scent — a veil of white musk, polished cedarwood, and soft amber.",
        top: "Aldehydes, Bergamot", heart: "White Musk, Peony", base: "Cedarwood, Clean Amber",
        volume: "100ml", concentration: "Eau de Parfum",
        images: [
            "https://images.unsplash.com/photo-1615529420084-2a13ae85a3c6?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 106, title: "Jardin de Nuit", category: "floral", price: "$275", rating: 5, reviews: 178,
        desc: "A moonlit garden captured in glass. Jardin de Nuit unveils a hypnotic bouquet of night-blooming jasmine and creamy tuberose.",
        top: "Green Notes, Mandarin", heart: "Night Jasmine, Tuberose, Gardenia", base: "Vetiver, Musk, Moss",
        volume: "100ml", concentration: "Eau de Parfum Intense",
        images: [
            "https://images.unsplash.com/photo-1588405748880-12d1d2a59f75?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1595425970377-c9703d740873?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1615529420084-2a13ae85a3c6?q=80&w=800&auto=format&fit=crop"
        ]
    },
    {
        id: 16, title: "Ambre Sacré", category: "limited", price: "$395", rating: 5, reviews: 67,
        desc: "Limited Edition. A sacred amber composition with frankincense, myrrh, and ancient cistus labdanum. Ritualistic and transcendent.",
        top: "Frankincense, Myrrh", heart: "Golden Amber, Cistus", base: "Benzoin, Vanilla, Precious Woods",
        volume: "100ml", concentration: "Parfum",
        images: [
            "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=800&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?q=80&w=800&auto=format&fit=crop"
        ]
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('productGrid');
    const filters = document.getElementById('filters');

    /* ===== Read URL param for collection filter ===== */
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilter = urlParams.get('filter') || 'all';

    const renderProducts = (category) => {
        grid.innerHTML = '';
        const filtered = category === 'all'
            ? products
            : products.filter(p => p.category === category);

        filtered.forEach((product, index) => {
            const card = document.createElement('div');
            card.className = 'product-card reveal';
            card.style.animationDelay = `${index * 0.08}s`;
            const stars = product.rating ? '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating) : '';

            card.innerHTML = `
                <div class="product-img-wrapper">
                    ${product.best ? '<span class="best-seller-tag">Best Seller</span>' : ''}
                    <img src="${product.images[0]}" alt="${product.title}" class="product-img" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category} Collection</span>
                    <h3 class="product-title">${product.title}</h3>
                    <p class="product-desc">${product.desc.substring(0, 80)}…</p>
                    ${stars ? `<div class="product-rating">${stars}</div>` : ''}
                    <div class="product-price">${product.price}</div>
                    <div class="product-actions">
                        <button class="btn btn-sm view-details-btn" data-id="${product.id}">View Details</button>
                        <button class="btn btn-sm add-cart-btn" data-id="${product.id}">Add to Cart</button>
                    </div>
                </div>
            `;
            grid.appendChild(card);
        });

        /* ===== Re-observe reveal elements ===== */
        const revealEls = document.querySelectorAll('.reveal:not(.visible)');
        const observer = new IntersectionObserver(entries => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
        }, { threshold: 0.1 });
        revealEls.forEach(el => observer.observe(el));
    };

    /* ===== Event Delegation for Buttons ===== */
    grid.addEventListener('click', (e) => {
        const viewBtn = e.target.closest('.view-btn') || e.target.closest('.view-details-btn');
        const addBtn = e.target.closest('.add-cart-btn');

        if (viewBtn) {
            const p = products.find(x => x.id === parseInt(viewBtn.dataset.id));
            if (p) openModal(p);
        }

        if (addBtn) {
            const p = products.find(x => x.id === parseInt(addBtn.dataset.id));
            if (p) SalaamCart.addItem({ id: p.id, title: p.title, price: p.price, image: p.images[0] });
        }
    });

    /* ===== Modal Gallery Logic ===== */
    let currentGalleryIndex = 0;
    let currentGalleryImages = [];

    const openModal = (product) => {
        const modal = document.getElementById('productModal');
        const stars = '★'.repeat(product.rating) + '☆'.repeat(5 - product.rating);

        // Fill details
        document.getElementById('modalCategory').textContent = product.category + ' Collection';
        document.getElementById('modalTitle').textContent = product.title;
        document.getElementById('modalStars').textContent = stars;
        document.getElementById('modalReviews').textContent = `(${product.reviews || 0} reviews)`;
        document.getElementById('modalPrice').textContent = product.price;
        document.getElementById('modalDesc').textContent = product.desc;
        document.getElementById('noteTop').textContent = product.top;
        document.getElementById('noteHeart').textContent = product.heart;
        document.getElementById('noteBase').textContent = product.base;

        // Specs
        document.getElementById('modalSpecs').innerHTML = `
            <div class="modal-spec"><div class="modal-spec-label">Volume</div><div class="modal-spec-value">${product.volume}</div></div>
            <div class="modal-spec"><div class="modal-spec-label">Concentration</div><div class="modal-spec-value">${product.concentration}</div></div>
        `;

        // Gallery
        currentGalleryImages = product.images;
        currentGalleryIndex = 0;
        const mainEl = document.getElementById('galleryMain');
        const thumbsEl = document.getElementById('galleryThumbs');
        
        mainEl.innerHTML = product.images.map((src, i) =>
            `<img src="${src}" alt="${product.title} view ${i + 1}" class="${i === 0 ? 'active' : ''}">`
        ).join('');
        
        thumbsEl.innerHTML = product.images.map((src, i) =>
            `<div class="gallery-thumb ${i === 0 ? 'active' : ''}" data-index="${i}"><img src="${src}" alt="Thumbnail ${i + 1}"></div>`
        ).join('');

        // Add to Cart
        document.getElementById('modalAddCart').onclick = () => {
            SalaamCart.addItem({ id: product.id, title: product.title, price: product.price, image: product.images[0] });
        };

        modal.classList.add('open');
    };

    const setGallerySlide = (index) => {
        currentGalleryIndex = index;
        document.querySelectorAll('#galleryMain img').forEach((img, i) => img.classList.toggle('active', i === index));
        document.querySelectorAll('#galleryThumbs .gallery-thumb').forEach((th, i) => th.classList.toggle('active', i === index));
    };

    // Gallery navigation
    document.getElementById('galleryPrev')?.addEventListener('click', () => {
        setGallerySlide((currentGalleryIndex - 1 + currentGalleryImages.length) % currentGalleryImages.length);
    });
    document.getElementById('galleryNext')?.addEventListener('click', () => {
        setGallerySlide((currentGalleryIndex + 1) % currentGalleryImages.length);
    });
    document.getElementById('galleryThumbs')?.addEventListener('click', (e) => {
        const thumb = e.target.closest('.gallery-thumb');
        if (thumb) setGallerySlide(parseInt(thumb.dataset.index));
    });

    // Close modal
    document.getElementById('modalClose')?.addEventListener('click', () => {
        document.getElementById('productModal').classList.remove('open');
    });
    document.getElementById('productModal')?.addEventListener('click', (e) => {
        if (e.target === e.currentTarget) e.currentTarget.classList.remove('open');
    });

    /* ===== Filters ===== */
    if (filters) {
        // Set initial active filter from URL
        if (initialFilter !== 'all') {
            const btn = filters.querySelector(`[data-filter="${initialFilter}"]`);
            if (btn) {
                filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        }

        filters.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                filters.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');
                renderProducts(e.target.getAttribute('data-filter'));
            }
        });
    }

    // Initial render
    renderProducts(initialFilter);
});
