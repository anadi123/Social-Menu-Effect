document.addEventListener('mousemove', (evt)=> {
	let x=evt.x-(window.innerWidth/2)
	let y=evt.y-(window.innerHeight/2)
	const effect=document.querySelector('.effect-mouse')
	effect.style.transform='translate(${x/2}px,${y/2}px)'
})