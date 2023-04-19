const gridContainerDom = document.querySelector(".container-main-grid");
let userPrompt = 0;

function getUserPrompt() {
  while (true) {
    userPrompt = Number(prompt("grid size x*x?"));
    if (userPrompt > 0 && userPrompt < 101) {
      break;
    } else {
      alert("wrong input, has to be greater than 0, less than 101");
    }
  }
}

function makeGrid(number) {
  for (let element = 0; element < number * number; element++) {
    const gridElementDom = document.createElement("div");
    gridElementDom.classList.add("grid-element");
    gridElementDom.style.height = `calc(${100 / number}% - 2px)`;
    gridElementDom.style.width = `calc(${100 / number}% - 2px)`;
    gridContainerDom.appendChild(gridElementDom);
  }
}

getUserPrompt();
makeGrid(userPrompt);

// check if there is proper grid element count
const check = gridContainerDom.childElementCount;
