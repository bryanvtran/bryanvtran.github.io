document.addEventListener("DOMContentLoaded", function(event) { 
  var photos = document.querySelectorAll('.photos__item');
  var viewer = document.querySelector('.photo-viewer');
  var photosNavItems = document.querySelectorAll('.photos-nav__item');

  photos.forEach(function(photo) {
    photo.addEventListener('click', function() {
      var path = this.children[0].src.split('/');
      var name = path[path.length-1];
      viewer.children[0].src = '/assets/images/photos/'+name;
      viewer.style.display = 'block';
    });
  });

  if (viewer) {
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
  }

  photosNavItems.forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();

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
});