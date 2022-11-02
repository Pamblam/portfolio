(async ()=>{

	document.getElementById("toc-btn").addEventListener('click', e=>{
		e.preventDefault();
		document.getElementById("toc-container").scrollIntoView({ behavior: 'smooth'});
	});

	document.querySelectorAll('[data-scrollto]').forEach(ele=>{
		ele.addEventListener('click', function(e){
			e.preventDefault();
			document.getElementById(this.dataset.scrollto).scrollIntoView({ behavior: 'smooth'});
		});
	});
	
	var em = 'adelphia' + '@' + 'protonmail' + '.' + 'ch';
	var ph = '(813)' + ' 616' + '-0819';
	document.getElementById("phone-span").innerHTML = `<a href='tel:${ph}'>${ph}</a>`;
	document.getElementById("email-span").innerHTML = `<a href='mailto:${em}'>${em}</a>`;
	
})();