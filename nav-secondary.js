window.onload = () => {
	document.querySelectorAll("#nav-secondary>ul>li").forEach((e) => {

		e.addEventListener("click", (element) => {
			for (let child of e.parentElement.children) {
				child.classList.remove("selected");
			}
			e.classList.add("selected");

		});
	});
}