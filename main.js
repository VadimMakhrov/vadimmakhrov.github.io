function getImageSize(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = function() {
    callback(img.naturalWidth, img.naturalHeight);
    img.onload = null;
    img.src = '';
  };
}
const src = `cover.jpg`;

getImageSize(src, function(width, height) {
	
	console.log(width, height)
	
  const scene = document.getElementById('scene');

	scene.style.width = '100vw';
	scene.style.height = '100vh';
	
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundSize = '80% auto';
	scene.style.backgroundPosition = 'center center';
	scene.style.backgroundColor = 'rgb(16,20,29)'
	console.log(scene.style.width, scene.style.height)

});
