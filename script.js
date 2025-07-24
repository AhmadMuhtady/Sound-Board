const sounds = [
	'applause',
	'boo',
	'gasp',
	'tada',
	'victory',
	'correct',
	'wrong',
];

sounds.forEach((sound) => {
	const btn = document.createElement('button');
	btn.classList.add('btn');
	btn.innerHTML = sound;

	document.getElementById('buttons').appendChild(btn);
});
