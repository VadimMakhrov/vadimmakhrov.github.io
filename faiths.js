function getImageSize(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    callback(img.naturalWidth, img.naturalHeight);
    img.onload = null;
    img.src = '';
  };
}

// const src = `assets/religion/pantheons_h.jpg`;
const params = new URLSearchParams(window.location.search);
const ideology = params.get('faiths');


if (ideology === 'founder') src = 'assets/religion/founder.jpg';
else if (ideology === 'admirer') src = 'assets/religion/admirer.jpg';
else if (ideology === 'strengthening') src = 'assets/religion/strengthening.jpg';



getImageSize(src, function(width, height) {
  const scene = document.getElementById('scene');
  const vh = window.innerHeight;
  const ratio = width / height;
  scene.style.width = (vh * ratio) + 'px';
  scene.style.height = vh + 'px';
	if (ideology === 'admirer') scene.style.margin = '0 0 0 30vh';
	scene.style.backgroundSize = '90% auto';
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundPosition = 'center 8vh';
});

