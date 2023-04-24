const gridContainerSelector = document.querySelector(".container-main-grid");
let userPrompt = 0;

function getUserPrompt() {
  while (true) {
    userPrompt = Number(prompt("type x to make grid x*x"));
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
    gridElementDom.style.height = `calc(${100 / number}%)`;
    gridElementDom.style.width = `calc(${100 / number}%)`;
    gridContainerSelector.appendChild(gridElementDom);
  }
}

getUserPrompt();
makeGrid(userPrompt);

// check if there is proper grid element count
const check = gridContainerSelector.childElementCount;

const slider = document.querySelector(".slider");
const sliderValue = document.querySelector(".slider-value");
sliderValue.value = slider.value;

slider.addEventListener("input", function () {
  sliderValue.value = this.value;
});
