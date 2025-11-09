function getImageSize(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    callback(img.naturalWidth, img.naturalHeight);
    img.onload = null;
    img.src = '';
  };
}

const src = `assets/religion/reformation.jpg`;

getImageSize(src, function(width, height) {
  const scene = document.getElementById('scene');
  const vh = window.innerHeight;
  const ratio = width / height;
  scene.style.width = (vh * ratio) + 'px';
  scene.style.height = vh + 'px';
	
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundSize = 'auto 93%';
	scene.style.backgroundPosition = 'center 100%';
});

