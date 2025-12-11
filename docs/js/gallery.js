// get modal element
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const closeBtn = document.getElementById('closeBtn');

// para ma-get yung imaages in the gallery
const images = document.querySelectorAll('.gallery-image');


images.forEach(image => {
    image.addEventListener('click', function() {
        modal.style.display = "block"; // show modal toh
        modalImg.src = this.src; // set modal image source to da clicked image source
    });
});


closeBtn.addEventListener('click', () => {
    modal.style.display = "none"; // hide modal
});