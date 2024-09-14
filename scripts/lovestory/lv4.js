const gallery = document.getElementById('photo-gallery');
const photoCount = 25; // Количество фотографий
const photoFolder = 'photo/lovestory/NikitaVeron/'; // Папка с фотографиями

for (let i = 1; i <= photoCount; i++) {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');

    const img = document.createElement('img');
    img.src = `${photoFolder}${i}.jpg`;

    photoDiv.appendChild(img);
    gallery.appendChild(photoDiv);
}
