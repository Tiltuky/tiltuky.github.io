const gallery = document.querySelector('.gallery');
const photos = document.querySelectorAll('.gallery .photo');
const scrollWidth = gallery.scrollWidth / (photos.length / 3); // Длина одного элемента

// Добавляем обработчики для стрелок
const leftArrow = document.querySelector('.arrow.left');
const rightArrow = document.querySelector('.arrow.right');

leftArrow.addEventListener('click', () => {
    gallery.scrollLeft -= scrollWidth;
    if (gallery.scrollLeft <= 0) {
        // Если достигли начала, прокручиваем к концу
        gallery.scrollLeft = gallery.scrollWidth;
    }
});

rightArrow.addEventListener('click', () => {
    gallery.scrollLeft += scrollWidth;
    if (gallery.scrollLeft >= gallery.scrollWidth - gallery.clientWidth) {
        // Если достигли конца, прокручиваем к началу
        gallery.scrollLeft = 0;
    }
});

window.addEventListener('scroll', function() {
    var block2 = document.getElementById('block2');
    var block1Height = document.getElementById('block1').offsetHeight;
    var scrollPosition = window.scrollY;

    // Указываем пороговую позицию, при которой второй блок становится активным
    var threshold = block1Height / 2;

    if (scrollPosition > threshold) {
        block2.classList.add('active'); // Делаем второй блок активным
    } else {
        block2.classList.remove('active'); // Скрываем второй блок
    }
});


