function injectButton() {
	if (document.getElementById('google-button')) return;

	const nav = document.querySelector('nav');
	if (!nav) return;

	const lists = nav.querySelectorAll('ul');
	// The nav has two lists: left (All, Images, etc.) and right (Search Assist, Duck.ai, Settings).
	// We inject into the right-side list.
	const rightList = lists[1];
	if (!rightList) return;

	const buttonEl = document.createElement('button');
	buttonEl.id = 'google-button';
	buttonEl.className = 'google-button';
	buttonEl.innerText = 'Search in Google';
	buttonEl.addEventListener('click', function () {
		const input = document.getElementById('search_form_input');
		if (!input || !input.value) return;
		window.location.href = 'https://www.google.com/search?q=' + encodeURIComponent(input.value);
	});

	const li = document.createElement('li');
	li.appendChild(buttonEl);
	rightList.insertBefore(li, rightList.firstChild);
}

const observer = new MutationObserver(function () {
	if (document.querySelector('nav ul:nth-child(2)')) {
		injectButton();
	}
});

observer.observe(document.body, { childList: true, subtree: true });

// Also attempt immediately in case the element is already present
injectButton();
