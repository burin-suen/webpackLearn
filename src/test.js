import timgImg from './images/timg2.jpg';

var img = document.createElement('img');
img.src = timgImg;
img.onload = function () {
	document.appendChild(img)
};
document.write('webpack test!');