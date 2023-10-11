const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const socre = document.querySelector('.score');

let count = 0;

const jump = () => {
	mario.classList.add('jump');

	setTimeout(() => {

		mario.classList.remove('jump');
		
	}, 500);
}
	
const loop = setInterval(() => {

	console.log('loop');

	const pipePosition = pipe.offsetLeft;
	const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

	console.log(marioPosition);

	const so = setInterval(() => {
		count++;
		socre.innerHTML = `SCORE: ${count}`;

	if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80){
		


		pipe.style.animation = 'none';
		pipe.style.animation = `${pipePosition}px`;

		mario.style.animation = 'none';
		mario.style.bottom = `${marioPosition + 80}px`;

		mario.src = './imagens/game-over.png';
		mario.style.width = '75px'
		mario.style.marginLeft = '50px'
	
		clearInterval(loop);
				
	}
	
		clearInterval(so);
		
	},10);

	}, 100);
	
	

document.addEventListener('keydown', jump);

// const so = setInterval(() => {
// 	count++;
// 	socre.innerHTML = `SCORE: ${count}`;
// }, 100);

