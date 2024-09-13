console.log('JavaScript загружен и работает');

// JavaScript для модального окна
document.addEventListener('DOMContentLoaded', function() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];
    const prev = document.getElementsByClassName('prev')[0];
    const next = document.getElementsByClassName('next')[0];

    // Найти все изображения в галерее
    const photos = document.querySelectorAll('.gallery .photo img');
    let currentIndex = 0;

    // Функция для показа изображения
    function showImage(index) {
        if (index >= 0 && index < photos.length) {
            lightbox.style.display = 'block';
            lightboxImg.src = photos[index].src;
            currentIndex = index;
        }
    }

    // Добавить обработчик события для каждого изображения
    photos.forEach((photo, index) => {
        photo.addEventListener('click', function() {
            showImage(index);
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

    // Переключение на предыдущее изображение
    prev.addEventListener('click', function() {
        if (currentIndex > 0) {
            showImage(currentIndex - 1);
        }
    });

    // Переключение на следующее изображение
    next.addEventListener('click', function() {
        if (currentIndex < photos.length - 1) {
            showImage(currentIndex + 1);
        }
    });
});
