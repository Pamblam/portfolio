document.getElementById("toc-btn").addEventListener('click', e=>{
	e.preventDefault();
	document.getElementById("toc-container").scrollIntoView({ behavior: 'smooth', block: 'end'})
});