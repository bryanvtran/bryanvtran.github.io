var photos = document.querySelectorAll('.photos__item');
var viewer = document.querySelector('.photo-viewer');

photos.forEach(function(photo) {
  photo.addEventListener('click', function() {

    viewer.children[0].src = this.children[0].src;
    viewer.style.display = 'block';
  });
});

viewer.addEventListener('click', function(e) {
  if (e.target.tagName.toLowerCase() === 'img') {
    return false;
  }
  viewer.style.display = 'none';
});

document.addEventListener('keyup', function(e) {
  if (viewer.style.display == 'block' ) {
    viewer.style.display = 'none';
  }
});
