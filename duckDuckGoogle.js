window.onload = function() {
	console.log("hello world")
	const searchElements = document.getElementsByClassName('header__search-wrap');
	
	console.log(searchElements)
	if(searchElements.length <= 0) return null
	console.log(searchElements)
	// creating the span element, then add a class attribute	
	let buttonEl = document.createElement('button')
	buttonEl.id = 'google-button'
	buttonEl.className = "google-button";
	buttonEl.innerText = "Search in Google";
	buttonEl.onclick = clickHandler

	// add the <a> element tree into the div#something
	searchElements[0].appendChild(buttonEl);

}

function clickHandler() {
	const input = document.getElementById('search_form_input');
	const url = 'https://www.google.com/search?q=' + encodeURIComponent(input.value);
	urlRedirect(url)
}

// https://stackoverflow.com/a/53706698/3058839
function urlRedirect(url) {
	const X = setTimeout(function () {
	  window.location.replace(url)
	  return true
	}, 300)
  
	if ((window.location = url)) {
	  clearTimeout(X)
	  return true
	} else {
	  if ((window.location.href = url)) {
		clearTimeout(X)
		return true
	  } else {
		clearTimeout(X)
		window.location.replace(url)
		return true
	  }
	}
  }
  