// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡';
const FULL_HEART = '♥';

// Your JavaScript code goes here!
let errorM = document.querySelector('#modal');
errorM.classList.add('hidden');
document.addEventListener('DOMContentLoaded', function() {
	const likes = document.querySelectorAll('span.like-glyph');
	likes.forEach((element) => {
		element.addEventListener('click', () => {
			mimicServerCall('url')
				.then(() => {
					element.classList.toggle('activated-heart');
					element.innerHTML = element.innerHTML == EMPTY_HEART ? FULL_HEART : EMPTY_HEART;
				})
				.catch((error) => {
					errorM.classList.remove('hidden');
					window.setTimeout(() => {
						errorM.classList.add('hidden');
					}, 5000);
				});
		});
	});
});

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url = 'http://mimicServer.example.com', config = {}) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			let isRandomFailure = Math.random() < 0.2;
			if (isRandomFailure) {
				reject('Random server error. Try again.');
			} else {
				resolve('Pretend remote server notified of action!');
			}
		}, 300);
	});
}
