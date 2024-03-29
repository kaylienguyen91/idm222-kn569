const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}, false);


document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}, false));


// create references to the modal...
var modal = document.getElementById('myModal');
// to all images -- note I'm using a class!
var images = document.getElementsByClassName('imgModal');
// the image in the modal
var modalImg = document.getElementById("img01");
// and the caption in the modal
var captionText = document.getElementById("caption");

// Go through all of the images with our custom class
for (var i = 0; i < images.length; i++) {
  var img = images[i];
  // and attach our click listener for this image.
  img.onclick = function(evt) {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking anywhere outside it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Close the modal when pressing Esc key
window.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.style.display = 'none'
  }
})