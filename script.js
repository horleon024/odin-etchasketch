function changeBackgroundColor(event) {
	const r = Math.floor(Math.random() * 256);
	const g = Math.floor(Math.random() * 256);
	const b = Math.floor(Math.random() * 256);
	event.target.style["background-color"] = `rgb(${r},${g},${b})`;
}

function cleanGrid() {
	let row = container.lastElementChild;

	while (row) {
		container.removeChild(row);
		row = container.lastElementChild;
	}
}

function createGrid(size) {

	for (let i = 0; i < size; i++) {
		const row = document.createElement("div");
		row.classList.add("row");
		for (let j = 0; j < size; j++) {
			const square = document.createElement("div");
			if (i >= 1) square.style["border-top"] = 0;
			if (j >= 1) square.style["border-left"] = 0;
			square.style.width = `${800 / size - 1}px`;
			square.style.height = `${800 / size - 1}px`;
			square.classList.add("square");
			square.addEventListener('mouseenter', changeBackgroundColor);
			row.appendChild(square);
		}
		container.appendChild(row);
	}
}

function promptUser(event) {
	const newSize = prompt("Enter the size of the new grid(max. 100)");
	cleanGrid();
	createGrid(newSize);
}

const container = document.querySelector(".container");
const newGridButton = document.querySelector(".newGridButton");

newGridButton.addEventListener('click', promptUser);


