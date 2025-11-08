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
const ideology = params.get('ideology');


if (ideology === 'autocracy') src = 'assets/ideologies/autocracy_h.jpg';
else if (ideology === 'freedom') src = 'assets/ideologies/freedom_h.jpg';
else if (ideology === 'order') src = 'assets/ideologies/order_h.jpg';



getImageSize(src, function(width, height) {

  const scene = document.getElementById('scene');
  const vh = window.innerHeight;
	const vw = window.innerWidth;

	scene.style.width = vw + 'px';
  scene.style.height = vh + 'px';

	
  scene.style.backgroundImage = `url('${src}')`;
	scene.style.backgroundPosition = 'center center';
	scene.style.backgroundSize = '95% auto'
	

});

