var photos = document.querySelectorAll('.photos__item');
var viewer = document.querySelector('.photo-viewer');
var photosNavItems = document.querySelectorAll('.photos-nav__item');

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

photosNavItems.forEach(function(link) {
  link.addEventListener('click', function(e) {
    var tag = this.innerHTML.toLowerCase();

    // removing old active tag and adding new active tag
    document.querySelectorAll('.photos-nav__item.active').forEach(function(active) {
      active.classList.remove('active');
    });
    this.classList.add('active');

    if (tag === 'all') {
      // show all
      photos.forEach(function(photo) {
        photo.style.display = 'block';
      });
    }
    else {
      // show only the ones with these classes?
      photos.forEach(function(photo) {
        if (hasClass(photo, tag)) {
          photo.style.display = 'block';
        }
        else {
          photo.style.display = 'none';
        }
      });
    }
  });
})

function hasClass(element, cls) {
    return (' ' + element.className + ' ').indexOf(' ' + cls + ' ') > -1;
}
