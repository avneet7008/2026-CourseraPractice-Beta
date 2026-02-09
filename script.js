console.log("JavaScript is working!");

document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('actionBtn');
	if (btn) {
		btn.addEventListener('click', (e) => {
			const original = btn.textContent;
			btn.textContent = 'Clicked!';
			btn.classList.add('clicked');
			setTimeout(() => {
				btn.textContent = original;
				btn.classList.remove('clicked');
			}, 900);
			console.log('Button clicked', e);
		});
	}

	// navigation button -> form.html
	const toForm = document.getElementById('toFormBtn');
	if (toForm) {
		toForm.addEventListener('click', () => {
			window.location.href = 'form.html';
		});
	}

	// form handling (if contact form exists on page)
	const form = document.getElementById('contactForm');
	const msg = document.getElementById('formMsg');
	if (form) {
		form.addEventListener('submit', (ev) => {
			ev.preventDefault();
			if (!form.checkValidity()) {
				form.reportValidity();
				return;
			}
			const data = {
				lastName: form.lastName.value.trim(),
				firstName: form.firstName.value.trim(),
				email: form.email.value.trim(),
				phone: form.phone.value.trim(),
			};
			console.log('Form submitted', data);
			if (msg) msg.textContent = `Thanks, ${data.firstName || data.lastName || 'there'} — submission received.`;
			form.reset();
			setTimeout(() => { if (msg) msg.textContent = ''; }, 3500);
		});
	}
});