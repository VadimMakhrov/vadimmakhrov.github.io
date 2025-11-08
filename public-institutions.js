function getImageSize(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    callback(img.naturalWidth, img.naturalHeight);
    img.onload = null;
    img.src = '';
  };
}
const src = `assets/public-institutions/public-institutions.jpg`;

getImageSize(src, function(width, height) {
  const scene = document.getElementById('scene');
  const vh = window.innerHeight;        // высота окна
  const ratio = width / height;          // соотношение сторон
	scene.style.width = (vh * 2) + 'px';
  scene.style.height = vh + 'px';
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundSize = '65% auto';
	scene.style.backgroundPosition = 'center bottom';

});
