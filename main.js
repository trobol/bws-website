window.onload = () => {
	document.querySelector('video').playbackRate = 0.7;


	let nav = document.getElementById("nav");
	let navClosed = true;
	nav.onclick = (event) => {
		if (navClosed) {
			nav.classList.remove("closed"); navClosed = false;
		} else {
			let e = event.target
			while (e != nav) {
				if (e.id == "close-nav") {
					nav.classList.add("closed");
					navClosed = true;
					return;
				}
				e = e.parentElement;
			}
		}
		console.log(event.target.id);
	}

}