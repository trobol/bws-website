window.onload = () => {
	document.querySelectorAll("#nav-secondary>ul>li").forEach((e) => {
		
		e.addEventListener("click", (e) => {
			for(let child of e.target.parentElement.children) {
				child.classList.remove("selected");
			}
			e.target.classList.add("selected");
			
		});
	});
}