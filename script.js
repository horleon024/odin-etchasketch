function changeBackgroundColor(event) {
	event.target.style["background-color"] = "blue";
}

function resetBackgroundColor(event) {
	event.target.style["background-color"] = "purple";
}

const container = document.querySelector(".container");

for (let i = 0; i < 16; i++) {
	const row = document.createElement("div");
	row.classList.add("row");
	for (let j = 0; j < 16; j++) {
		const square = document.createElement("div");
		if (i >= 1) square.style["border-top"] = 0;
		if (j >= 1) square.style["border-left"] = 0;
		square.classList.add("square");
		row.appendChild(square);
	}
	container.appendChild(row);
}

const squares = document.querySelectorAll(".square");

//squares.forEach(square => square.addEventListener('mouseenter', changeBackgroundColor));
squares.forEach(square => square.addEventListener('mouseover', resetBackgroundColor));