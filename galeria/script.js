const images = document.querySelectorAll('.image-wrapper img');
const modal = document.getElementById('modal');
const close = document.querySelector('#modal i');

images.forEach(image => {
    image.addEventListener('click', e => {
        modal.style.visibility = 'visible';
        const img = document.createElement('img');
        img.classList.add('modal-img');
        img.src = e.target.currentSrc;
        modal.append(img);
        
        closeModal(img)
    });
});

function closeModal(img) {
    close.addEventListener('click', () => {
        modal.style.visibility = 'hidden';
        img.style.display = 'none';
    })
}