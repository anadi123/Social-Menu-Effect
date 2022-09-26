document.addEventListener('mousemove', (evt)=> {
	let x=evt.x-(window.innerWidth/2)
	let y=evt.y-(window.innerHeight/2)
	// let x=evt.x-(document.body.getBoundingClientRect().width/2)
	// let y=evt.y-(document.body.getBoundingClientRect().height/2)
	const effect=document.querySelector('.effect-mouse')
	effect.style.transform=`translate(${x/2}px,${y/2}px)`	
	console.log(x,y)
})
// document.getElementById()
// DOMRect {x: 8, y: 8, width: 134, height: 214, top: 8, …}