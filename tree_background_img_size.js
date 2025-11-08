function getImageSize(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    callback(img.naturalWidth, img.naturalHeight);
    img.onload = null;
    img.src = '';
  };
}

const params = new URLSearchParams(window.location.search);
const civ = params.get('civ');
const src = `assets/trees/${civ}.jpg`;

getImageSize(src, function(width, height) {

  const scene = document.getElementById('scene');
  const vh = window.innerHeight;
  const ratio = width / height;
	console.log(ratio)
  scene.style.width = (vh * ratio) + 'px';
  scene.style.height = vh + 'px';
	
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundPosition = 'left top';
	
	
	scene.style.backgroundSize = 'auto 100%';
	
});



