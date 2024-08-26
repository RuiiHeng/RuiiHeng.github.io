document.querySelectorAll('.gallery-item img').forEach(img => {
    img.addEventListener('click', () => {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const caption = document.getElementById('caption');

        lightbox.style.display = 'block';
        lightboxImg.src = img.src;
        caption.textContent = img.getAttribute('data-description');
    });
});

document.querySelector('.close').addEventListener('click', () => {
    document.getElementById('lightbox').style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === document.getElementById('lightbox')) {
        document.getElementById('lightbox').style.display = 'none';
    }
});
