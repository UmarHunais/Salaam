document.addEventListener('DOMContentLoaded', () => {
    const canvas = document.getElementById('hero-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    // Set up canvas dimensions to cover window
    const resizeCanvas = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Configuration
    const frameCount = 147; // ezgif-frame-001 to 147
    const images = [];
    let loadedImages = 0;
    
    // UI Elements
    const progressBar = document.getElementById('progress-bar');
    const loader = document.getElementById('loader');
    const wrapper = document.getElementById('scroll-wrapper');
    const textBeats = document.querySelectorAll('.text-beat');

    // Make numbers format like 001, 002
    const currentFrame = index => (
        `images/sequence/ezgif-frame-${String(index).padStart(3, '0')}.jpg`
    );

    // Preload Images
    const preloadImages = () => {
        for (let i = 1; i <= frameCount; i++) {
            const img = new Image();
            img.src = currentFrame(i);
            img.onload = () => {
                loadedImages++;
                progressBar.style.width = `${(loadedImages / frameCount) * 100}%`;
                
                // Draw first frame immediately
                if (i === 1) {
                    drawFrame(images[0]);
                }

                if (loadedImages === frameCount) {
                    // All loaded, fade out loader
                    setTimeout(() => {
                        loader.style.opacity = 0;
                        setTimeout(() => loader.style.display = 'none', 500);
                        initScrollAnimation();
                    }, 500);
                }
            };
            images.push(img);
        }
    };

    // Draw frame covering the canvas maintaining aspect ratio
    const drawFrame = (img) => {
        if (!img) return;
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth = canvas.width;
        let drawHeight = canvas.height;
        let offsetX = 0;
        let offsetY = 0;

        if (canvasRatio > imgRatio) {
            drawHeight = drawWidth / imgRatio;
            offsetY = (canvas.height - drawHeight) / 2;
        } else {
            drawWidth = drawHeight * imgRatio;
            offsetX = (canvas.width - drawWidth) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    // Scroll Logic
    const initScrollAnimation = () => {
        let ticking = false;

        const updateFrames = () => {
            const wrapperStart = wrapper.offsetTop;
            const scrollDistance = wrapper.offsetHeight - window.innerHeight;
            
            // Calculate progress inside wrapper
            let scrollProgress = (window.scrollY - wrapperStart) / scrollDistance;
            scrollProgress = Math.max(0, Math.min(1, scrollProgress)); // clamp 0-1

            const frameIndex = Math.floor(scrollProgress * (frameCount - 1));
            
            requestAnimationFrame(() => {
                // Draw image
                drawFrame(images[frameIndex]);

                // Handle text beats
                textBeats.forEach(beat => {
                    const start = parseFloat(beat.getAttribute('data-start'));
                    const end = parseFloat(beat.getAttribute('data-end'));
                    
                    if (scrollProgress >= start && scrollProgress <= end) {
                        beat.classList.add('visible');
                    } else {
                        beat.classList.remove('visible');
                    }
                });
            });

            ticking = false;
        };

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateFrames);
                ticking = true;
            }
        });
        
        // Initial setup run
        updateFrames();
    };

    // Start preloading process
    preloadImages();
});
