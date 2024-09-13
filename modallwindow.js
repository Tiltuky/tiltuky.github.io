console.log('JavaScript загружен и работает');

// JavaScript для модального окна
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];

    // Найти все изображения в галерее
    const photos = document.querySelectorAll('.gallery .photo img');

    // Добавить обработчик события для каждого изображения
    photos.forEach(photo => {
        photo.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src; // Отобразить выбранное изображение в модальном окне
        });
    });

    // Закрыть модальное окно при клике на "X"
    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    // Закрыть модальное окно при клике вне изображения
    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});