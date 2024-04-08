document.querySelector('.js-select-button').addEventListener('click', () => {
	var option = document.getElementById('field-of-study').value;
	
	switch(option) {
		case 'programming':
			window.location.href = "CSE/programming-main.html";
			break;
		case 'mathematics':
			window.location.href = "MATH/mathematics-main.html";
			break;
		case 'physics':
			window.location.href = "PHY/physics-main.html";
			break;
	}
});